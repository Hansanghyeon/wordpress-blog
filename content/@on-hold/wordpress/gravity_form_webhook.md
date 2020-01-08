# Gravity Forms로 StibeeAPI를 나는 어떻게 이용했는가?
### 어떤 기능을 구사해야 되나?
자체 GE서버에서 이메일을 보낼 수 있다 하지만 이메일 전송이 매우 느린점이 문제였다.  
대용량 이메일 전송을 GE서버에내서 처리하는 대신 외부서비스인 스티비를 이용하여 해결하려고한다.  
스티비를 이용하여 구독자 리스트를 간결하게 저장하고 그 이외의 필요한 설문 내용들을 저장하는 것은 그래비티폼즈에서 저장해서 구분하게 만들려한다.

두개의 서비스를 모두 활용해야 한다는 것이다.  
**Gravity Forms, Stibee email serviece**  
그래서 그래비티 폼즈를 데이터를 줄때 스티비API에도 전송하려했다.  
하지만 문제점이 있어서 중간 경유 API를 자체적으로 만들어서 스티비API로 보내주는 프로세스를 만든다.

### 작업하면서 찾은 Gravity Forms 문제점  

1. json 형태의 데이터값을 보낼때 객체 > 배열 > 객체 작업을 할 수 없었다.

  ```raw
  {
    key : value,
    key2 : [
      {
        key2-2 : value
      }
    ]
  }
  ```

### Gravity Forms의 Webhook을 이용해서 데이터 보내기

Webhook Add-on을 이용해서

```raw
{
  key : value,
  key2 : value,
  key3 : value
}
```

위 같이 보내줄수 밖에 없어서 재가공할 수 있는 API를 제작해서 보내준다.

### AWS API Gatway

POST HTTP 방식으로 제작.  
request header `AccessToken` 꼭필요

Webhook으로 받은 json값을 아래와 같이 재가공해서 스티비API로 보내준다.
```raw
{
  "eventOccuredBy": "SUBSCRIBER",
  "confirmEmailYN": "Y",
  "groupIds": [
    $util.escapeJavaScript($input.json('$.groupids')).replaceAll('\\"', '"')
  ],
  "subscribers": [
    "name": $util.escapeJavaScript($input.json('$.name')).replaceAll('\\"', '"'),
    "company": $util.escapeJavaScript($input.json('$.compnay')).replaceAll('\\"', '"'),
    "department": $util.escapeJavaScript($input.json('$.department')).replaceAll('\\"', '"'),
    "position": $util.escapeJavaScript($input.json('$.position')).replaceAll('\\"', '"'),
    "email": $util.escapeJavaScript($input.json('$.email')).replaceAll('\\"', '"'),
    "phone": $util.escapeJavaScript($input.json('$.phone')).replaceAll('\\"', '"'),
    "sectors": $util.escapeJavaScript($input.json('$.sectors')).replaceAll('\\"', '"'),
    "job": $util.escapeJavaScript($input.json('$.job')).replaceAll('\\"', '"'),
    "subject": "$util.escapeJavaScript($input.json('$.subject_1')).replaceAll('\\"', '"').replaceAll('"', '')"
  ]
}
```

json 값을 `"$util.escapeJavaScript($input.json('$.subject_1')).replaceAll('\\"', '"').replaceAll('"', '')"` 인코딩한 이유는 `$input.json('$')`으로 받아봤는데 한글이 깨지는 것이다.

검색으로 알아봤는데 인코딩을 UTF-8로 해줘야한다는데 바꿔줘도 이상하게 적용이 안된는 것이다.
그래서 위와 같이 자바스크립트로 적용했다.
