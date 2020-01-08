# Ubuntu18.04LTS & PHP7.2

## AWS EC2

---

### Desktop VM 환경일 경우(옵션사항)

sshd 설치

```bash
sudo apt-get install openssh-server
sudo service ssh status
```

루트 접속설정

```bash
sudo nano /etc/ssh/sshd_config
```

설정내용

```bash
sudo nano /etc/ssh/sshd_config
FROM: PermitRootLogin prohibit-password
TO: PermitRootLogin yes
```

**VPS 서비스를 이용 할 경우 기본 설치 되어있음.**

---

### OS 업데이트

```bash
apt-get update && apt-get upgrade
```

---

### NGINX

```bash
apt-get install nginx

/lib/systemd/systemd-sysv-install enable nginx

systemctl start nginx
systemctl status nginx

apt-get install curl
```

curl 설치가 되어있어야지만 Paypal 결제가됨.

#### 소유자 확인

nginx 설치위치 /etc/nginx
기본 퍼블릭 웹폴더 /var/www
www-data가 아닐경우

```bash
chown -R www-data:www-data /usr/share/nginx/html
```

---

#### nginx.conf 환경설정

```nginx
user www-data;
worker_processes auto;
pid /run/nginx.pid;

events {
        worker_connections 768;
        # multi_accept on;
}

http {

        ##
        # Basic Settings
        ##
        sendfile on;
        tcp_nopush on;
        tcp_nodelay on;
        keepalive_timeout 65;
        types_hash_max_size 2048;
        # server_tokens off;
        client_max_body_size 128M;
        # server_names_hash_bucket_size 64;
        # server_name_in_redirect off;

        include /etc/nginx/mime.types;
        default_type application/octet-stream;

        ##
        # SSL Settings
        ##

        ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
        ssl_prefer_server_ciphers on;

        ##
        # Logging Settings
        ##

        access_log /var/log/nginx/access.log;
        error_log /var/log/nginx/error.log;

        ##
        # Gzip Settings
        ##

        gzip on;
        gzip_disable "msie6";

        gzip_vary on;
        gzip_proxied any;
        gzip_comp_level 6;
        gzip_buffers 16 8k;
        gzip_http_version 1.1;
        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

        ##
        # Virtual Host Configs
        ##

        include /etc/nginx/conf.d/*.conf;
        include /etc/nginx/sites-enabled/*;
}


#mail {
#       # See sample authentication script at:
#       # http://wiki.nginx.org/ImapAuthenticateWithApachePhpScript
#
#       # auth_http localhost/auth.php;
#       # pop3_capabilities "TOP" "USER";
#       # imap_capabilities "IMAP4rev1" "UIDPLUS";
#
#       server {
#               listen     localhost:110;
#               protocol   pop3;
#               proxy      on;
#       }
#
#       server {
#               listen     localhost:143;
#               protocol   imap;
#               proxy      on;
#       }
#}
```

nginx 도메인 설정

1. sites-available 파일 설정

   ```nginx
   server {
       listen 80 default_server;
       listen [::]:80 default_server;

       root /var/www/html;
       index index.php index.html index.htm index.nginx-debian.html;

       server_name 192.168.2.131;
       charset UTF-8;

       location / {
           try_files $uri $uri/ =404;
       } < 워드프레스에서 제거

       location / {
               try_files $uri $uri/ /index.php?q=$request_uri;
       }
       또는 아래 퍼머링크 엔진엑스 매뉴얼에 있는...
       location / {
               try_files $uri $uri/ /index.php?$args;
       }

       location ~ \.php$ {
           try_files $uri =404;
           fastcgi_split_path_info ^(.+\.php)(/.+)$;
           fastcgi_pass unix:/run/php/php7.0-fpm.sock;
           fastcgi_index index.php;
           fastcgi_read_timeout 150;
           include fastcgi.conf;
       }

       location ~ /\.ht {
           deny all;
       }

       location /xmlrpc.php {
           deny all;
       }

       location ~* \.(ico|css|js|gif|jpeg|jpg|png|woff|ttf|otf|svg|woff2|eot)$ {
           expires 365d;
           add_header Pragma public;
           add_header Cache-Control "public";
       }

   }
   ```

2. sites-enalbe에 심볼릭 링크 설정

   ```bash
   ln -s /etc/nginx/sites-available/해당파일 /etc/nginx/sites-enable/
   ```

3. nginx status, reload

   ```bash
   nginx -t
   nginx -s

   service nginx status
   service nginx reload

   systemctl status nginx
   systemctl reload nginx
   ```

---

### MariaDB

#### 설치 및 셋팅

```bash
apt-get install mariadb-server mariadb-client

/lib/systemd/systemd-sysv-install enable mysql

systemctl status mysql
systemctl start mysql

mysql_secure_installation
```

#### DB생성

```mysql
CREATE DATABASE {DB이름};
```

#### 유저 생성

```mysql
CREATE USER {유저이름}@localhost;
```

#### 유저비밀번호 설정

```mysql
SET PASSWORD FOR {유저이름}@localhost= PASSWORD("{유저비밀번호}");
```

#### 디비에 권한주기

```mysql
GRANT ALL PRIVILEGES ON {DB이름}.* TO {유저이름}@localhost IDENTIFIED BY '{유저비밀번호}';
```

#### 권한적용

```mysql
FLUSH PRIVILEGES;
```

#### DB삭제

```mysql
DROP DATABASE database_name;
```

#### 모든 유저보기

```mysql
use mysql;
select host, user from user;
```

#### 유저 삭제

```mysql
DROP USER '아이디'@'접속영역(localhost or %)';
```

#### ssl 접속방법

```bash
mysql -h mysql–instance1.123456789012.us-east-1.rds.amazonaws.com -P 3306 -u mymasteruser -p
```

---

### PHP7.2

```bash
apt-get install php7.2 php7.2-fpm php7.2-mysql php7.2-mbstring php7.2-common php7.2-gd php7.2-json php-gettext php7.2-curl php7.2-cli php7.2-xml php7.2-bcmath php7.2-bz2 php7.2-dba php7.2-intl php7.2-soap php7.2-xmlrpc php7.2-zip
```

```bash
systemctl start php7.2-fpm
systemctl status php7.2-fpm
/lib/systemd/systemd-sysv-install enable php7.2-fpm
```

#### php7.2 연동 핵심은 환경설정에서 경로 잘 지정

#### 보안설정

`/etc/php/7.2/fpm/php.ini`

```bash
cgi.fix_pathinfo=0
```

업로드 사이즈 설정 외

```bash
max_execution_time = 259200
max_input_vars:   3000
max_input_time:   60
upload_max_filesize = 256M
post_max_size = 256M
```

설정하고나면

```bash
systemctl restart php7.2-fpm
systemctl reload nginx
```

php.ini 참고

```ini
max_execution_time:   259200   ;Recomended min value 120
max_input_vars:   3000   ;Recomended min value 3000
max_input_time:   60   ;Recomended min value 60
post_max_size value:   128M   ;Recomended min value 20M
upload_max_filesize:   128M   ;Recomended min value 30M
allow_url_fopen:   YES   ;This option enables the URL-aware fopen wrappers that enable accessing URL object like files
short_open_tag value:   YES   ;short_open_tag=off is not supported
memory_limit value:   ;System(local): 128M
php.ini(Global): 128M
pure: 128M   ;Memory limit settings should be not less than 128M. It is recommended to disable unused PHP modules in php.ini file to increase the memory size available to applications.
Email Sending:   YES   ;Attempt to call the mail() function
Safe mode:   NO   ;Safe Mode is not supported
Mcrypt module:   YES   ;Required for secure cloud backup
Hash module:   YES   ;Required for secure cloud backup
Functions to work with sockets:   YES   ;Required for work of SiteUpdate system
Sessions saving:   not tested ;Required for saving authorization
PHP accelerator:   YES (OPcache)   ;PHP Accelerator is recommended (APC, XCache or any other except deprecated EAccelerator), it allows to greatly reduce the CPU load and PHP scripts execution time. It's desirable that the accelerator memory should be sufficient for commonly-used PHP pages.
;If there is no PHP accelerator, analysis of phpinfo() is required
;File system
Disk space:   9757 Mb   ;It is recommended to have not less than 500M
```

---

### Wordpress

```bash
curl -O https://wordpress.org/latest.tar.gz
tar xzvf latest.tar.gz
```
