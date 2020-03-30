## 고가용성 서버 구성하기

목표 아키텍쳐
'img 넣기'

### 1. Route 53

사용할 도메인인을 domains.google.com에서 구입한다.  
Route 53에서 연결할 도메인 호스트영역을 생성해준다.  
구글도메인에서 구입한 도메인의 네임서버를 AWS Route 53에 호스트영역에 나와있는 네임서버로 변경해준다.

내가 적용할 도메인

- dan4log.com (웹서비스)
- 4log.dev (CDN)

### 2. Certification 인증서 받기

도메인이 연결되었다면 인증서 받는게 시간이 오래걸리 수도있고 금방될 수도있어서 2번째로 구성해준다.

dan4log.com (웹서비스)  
서울 리전의 Certification 인증을 받는다.

4log.dev (CDN)  
CloudFront에 연결할 것이기 때문에 지역은 `버지니아 북부`로 구성해줘야한다.
Certification 인증을 받는다.

### 2. Master instance 구성

Master instance는 nginx + php7.2로 구성된다.

나는 Ubuntu18.04LTS로 서버를 구성해줄꺼다.  
이에 관련된 내용은 너무 길어서 다음 포스트를 참고 [Ubutnu18.04LTS server setting](https://dan4log.com/ubutnu18-04lts-server-setting/)

### 3. 로드밸런서 생성

일단 Master 인스턴스로 로드밸런서를 생성해준다.  
대상그룹을통해서 인스턴스 HTTP 80번포트를 통해서 인스턴스의 상태를 확인해준다.
error timeout invalid_header http_500 http_502 http_503 http_504  
위 상태가 응답되면 Slave 인스턴스로 연결을 해줄꺼다.

Application Load Balancer로 생성하기 대상그룹은 Master instance 구성

### 4. S3

정적파일을 올려놓을 S3 버킷생성

### 5. CloudFront 구성하기

1. 연결할 S3 선택
2. [CloudFront 설정하기](#)

#### domain연결

Route 53 A레코드를 CloudFront로 연결해준다.

---

고가용성 서버에서 워드프레스 설정하기

[워드프레스 고가용성 아키텍처 참고](https://intown.biz/2017/03/23/wordpress-aws-real-world/)
