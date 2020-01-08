## nginx

`(blocked:mixed-content)`  
Mixed Content: The page at 'https://4log.dev/' was loaded over HTTPS, but requested an insecure script 'http://4log.dev/wp-includes/js/wp-embed.min.js?ver=5.2.1'. This request has been blocked; the content must be served over HTTPS.

당시 테스트는 https://4log.dev에서 진행하였다.

그런데 문제가 로드밸런서와 인스턴스간의 연결은 80포트로 되어서 css파일등 불러오지 못하는 것같다.
강제적으로 nginx php연결을 https로 변경해주었다.

/etc/nginx/fastcgi.conf

```conf
fastcgi_param  HTTPS              on;
fastcgi_param  HTTP_SCHEME        https;
```

위처럼 변경추가하면 http로 전송되는게 아닌 https로 주고받게된다.

아직 확실한게아니라서 http로 만들어질 홈페이지에 대해서 테스트를 해봐야될 것같다.
