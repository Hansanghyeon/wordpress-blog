---
title: GCP에서 워드프레스 쿠버네티스로 만들기 튜토리얼
date: "2019-10-27T22:12:03.284Z"
description: "워드프레스 쿠버네티스로 운영하기 삽질기"
---

## Concept
- ~~nginx + wordpress:php-fpm + AWS RDS~~
- ~~wordpress(apache, php) + mysql~~
- ~~nginx + php + mysql~~
- **wordpress(apache, php) + GSC + PD**
위와같은 컨셉을 적용하기위해서 고생했던 내용들을 정리해본다.
디렉토리 구조

```
    .
    ├── README.md
    ├── sql
    │   └── cloudsql-db-credentials.yaml
    └── wordpress
        ├── wordpress-cloudsql.yaml
        ├── wordpress-service.yaml
        ├── wordpress-vloumeclaim.yaml
        └── wordpress.yaml
```

일단 `kubectl` 을 간단히 사용하기 위해서
    alias k='kubectl'
- `kubectl` 명령어
    Pod
    ```bash
    k get pod
    ```
    ```bash
    k describe pod
    ```
    Secret
    ```bash
    k create secret generic ${NAME} --from-file=${생성할 파일이름}=${대입할 파일}
    ```
    ```bash
    k create secret generic cloudsql-instance-credentials --from-file=credentials.json=elite-mix-255323-80f2354d6faf.json
    ```
    yaml
    ```bash
    k apply -f ${실행할.yaml}
    ```
    ```bash
    k delete -f ${중지할.yaml}
    ```
    ```bash
    k delete -f ./
    #헤당 디렉토리안의 모든 yaml 파일을 삭제한다.
    ```
    log
    ```bash
    k logs -l app=wordpress -c web
    ```
    ```bash
    k logs -l app=wordpress -c cloudsql-proxy
    ```
- Kubernetes Local list 및 정보 수정 `kubectl` 명령어
    정보 모두보기
    ```bash
    k config view
    ```
    정보 제거하기
    ```bash
    k config unset ${clusters, users, ...}.해당이름
    ```
---
## 1. GSC
### Secret
1. **cloudsql-db-credentials**
    DB에 저장되어있는 user, password 정보 
    ```yaml
    #cloudsql-ds-credentials.yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: cloudsql-db-credentials
    type: Opaque
    data:
      username: username #base-64
      password: password #base-64
    ```
    username과 passowrd는 base-64로 인코딩한 값을 넣어줘야한다. 아니면 에러를 뿜음!
    why? password는 대부분 특수문자를 포함하는데 k apply, k create하면 password에 포함할 수 없는 문자가 있다고 나온다.
    → [http://bit.ly/33PQJQl](http://bit.ly/33PQJQl)
2. **cloudsql-instance-credentials**
    1. GSC에 접근이 가능한 계정을 만들어준다 → [http://bit.ly/2JdsOCJ](http://bit.ly/2JdsOCJ)
    2. 해당 접근 가능 계정을 만들고 Private key JSON 형식을 파일다운로드
    3. Secret 생성
            k create secret generic cloudsql-instance-credentials --from-file=credentials.json=elite-mix-255323-80f2354d6faf.json
## 2. Wordpress
여러 컨테이너의 볼륭은 한공간에서 처리해야해서 첫번째로 해야하는 것은 영구볼륨과 연결해주는 작업을 해야한다.
1. wordpress-volumeclaim.yaml
    ```yaml
    kind: PersistentVolumeClaim
    apiVersion: v1
    metadata:
      name: wordpress-volumeclaim
    spec:
      accessModes:
        - ReadWriteOnce
      resources:
        requests:
          storage: 30Gi
    ```
2. wordpress Deployment
    여기서는 선택지가 있다. DB컨테이너를 사용하는 방법, 클라우드DB를 사용하는 방법(GCP-GSC, AWS-RDS) 대표적으로 이렇게 나뉠 수 있다.
    하지만 여기서는 클라우드 DB를 사용하는 방법만 다룰 예정이다.
    ### `wordpress-cloudsql.yaml`
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: wordpress
      labels:
        app: wordpress
    spec:
      selector:
        matchLabels:
          app: wordpress
      template:
        metadata:
          labels:
            app: wordpress
        spec:
          containers:
            - name: web
              image: wordpress
              ports:
                - containerPort: 80
    #          volumeMounts:
    #            - name: wordpress-persistent-storage
    #              mountPath: /var/www/html
              env:
                - name: WORDPRESS_DB_HOST
                  value: 127.0.0.1:3306
                # These secrets are required to start the pod.
                # [START cloudsql_secrets]
                - name: WORDPRESS_DB_USER
                  valueFrom:
                    secretKeyRef:
                      name: cloudsql-db-credentials
                      key: username
                - name: WORDPRESS_DB_PASSWORD
                  valueFrom:
                    secretKeyRef:
                      name: cloudsql-db-credentials
                      key: password
                # [END cloudsql_secrets]
                # Change <INSTANCE_CONNECTION_NAME> here to include your GCP
                # project, the region of your Cloud SQL instance and the name
                # of your Cloud SQL instance. The format is
                # PROJECT:REGION:$INSTANCE
                # [START proxy_container]
            - name: cloudsql-proxy
              image: gcr.io/cloudsql-docker/gce-proxy:1.14
              command: ["/cloud_sql_proxy",
                        "-instances=elite-mix-255323:asia-northeast1:k8s-wordpress=tcp:3306",
                # If running on a VPC, the Cloud SQL proxy can connect via Private IP. See:
                # https://cloud.google.com/sql/docs/mysql/private-ip for more info.
                # "-ip_address_types=PRIVATE",
                        "-credential_file=/secrets/cloudsql/credentials.json"]
              # [START cloudsql_security_context]
              securityContext:
                runAsUser: 2  # non-root user
                allowPrivilegeEscalation: false
              # [END cloudsql_security_context]
              volumeMounts:
                - name: cloudsql-instance-credentials
                  mountPath: /secrets/cloudsql
                  readOnly: true
            # [END proxy_container]
          # [START volumes]
          volumes:
            - name: cloudsql-instance-credentials
              secret:
                secretName: cloudsql-instance-credentials
    #        - name: wordpress-persistent-storage
    #          persistentVolumeClaim:
    #            claimName: wordpress-volumeclaim
          # [END volumes]
    ```
3. wordpress Service
    서비스는 LoadBalancer로 구성하였다. ingress로 구성하고싶었는데 무엇인지 모르지만 아직 해결하지 못한 오류때문에 지금은 LoadBalancer로 구성하였다.
    ingress로 구성하면 코드로 SSL로 구성하고 편리할 것같은데 지금은 GCP에서 구성하는 방식으로 진행하였다.
    사실 학습목적이 매우 큰부분이다.
    ### `wordpress-service.yaml`
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      labels:
        app: wordpress
      name: wordpress
    spec:
      type: LoadBalancer
      ports:
        - port: 80
          targetPort: 80
          protocol: TCP
      selector:
        app: wordpress
    ```
### 추후 진행해야하는 부분
- [ ] ingress로 서비스 바꾸기
- [ ] code push 어떻게할지 구상
## etc. code push
CI/CD
이부분을 많이 고민했다. 워드프레스의 내 작업에 대한 버전을 관리하고 코드의 버전도 관리할 수 있을까?
처음에는 변경되는 부분마다 버전을 관리해서 이미지로 만들어서 이미지를 배포하면 되지 않을까? 생각했다. 하지만 그렇게하면 글을 작성할 때 또는 자잘한 수정에도 이미지를 만들고 배포하는 과정이 너무 비효율적이라 생각했다.
이런 부분을 나눌 수 있으 면 좋지 않을까 생각도했다. 컨텐츠는 컨텐츠 영역으로.
추후에 워드프레스 자체는 CMS로 만 사용할떄는 이 고민을 해결 할 수 있을 것 같다. SPA처럼 만들면 앱 차제를 만들어 빌드하는 것은 다른 영역에서 실행하는 것이라 워드프레스 내에서 페이지를 만들고 할 필요가 없지않을까?
case
- 글을 작성할때 post
- 페이지, taxonomy 관련 페이지제작 (버전관리 필요)
