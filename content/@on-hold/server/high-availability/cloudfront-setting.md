## CloudFront Setting 설명

- Web : 일반적인 웹 서버 방식입니다.
- RTMP : 동영상 실시간 스트리밍 프로토콜 입니다.

### Origin Settings

- Origin Domain Name : 오리진의 도메인 이름을 설정합니다. Origin Domain Name 부분을 클릭하면 현재 사용할 수 있는 S3 버킷과 ELB의 목록이 표시됩니다. 방금 생성한 S3 버킷(그림 12-12에서는 examples3origin.s3.amazonaws.com)을 선택합니다.
- Origin ID : 오리진을 구분하는 ID입니다. 크게 중요한 것은 아니며 Origin Domain Name에서 S3 버킷을 선택하면 자동으로 설정됩니다.
- Restrict Bucket Access : S3 버킷에 CloudFront 만 접근할 수 있도록 설정하는 옵션입니다. Yes를 선택합니다.
- Origin Access Identity : 오리진에 접근할 식별자 입니다. 새로 생성할 수도 있고 이미 있는 것을 사용할 수도 있습니다. Create a New Identity를 선택합니다.
- Comment : 새로 생성할 식별자 이름입니다. 기본값 그대로 사용합니다.
- Grant Read Permissions on Bucket : CloudFront가 S3에서 파일을 읽을 수 있는 권한을 버킷의 Bucket Policy에 설정합니다. Yes로 설정하면 다른 모든 접속은 제한되고 CloudFront만 접근할 수 있도록 버킷에 Bucket Policy가 설정됩니다. Yes, Update Bucket Policy를 선택합니다.
- Path Pattern : CloudFront로 파일을 가져올 규칙입니다. 기본값은 \*로 설정되어 있어서 모든 파일을 가져오게 됩니다. 이 부분은 여기서는 수정할 수 없고 배포를 생성한 뒤 따로 추가할 수 있습니다.
- Viewer Protocol Policy : CloudFront로 보여질 프로토콜 정책 입니다. 기본값 그대로 사용합니다.
  - HTTP and HTTPS : HTTP와 HTTPS를 둘 다 사용합니다.
  - Redirect HTTP to HTTPS : 모든 HTTP 접속을 HTTPS로 리다이렉트 합니다.
  - HTTPS Only : HTTPS만 사용합니다.
- Allowed HTTP Methods : 허용하는 HTTP 메서드 종류입니다. 기본값 그대로 사용합니다.
  - GET, HEAD : 파일을 읽기만 할 때 선택합니다.
  - GET, HEAD, PUT, POST, PATCH, DELETE, OPTIONS : 동적 콘텐츠 전송을 사용할 때 선택합니다.

### Default Cache Behavior Settings

- Object Caching : 파일의 캐시 유지 시간을 설정합니다. 유지 시간이 지나면 CloudFront에서 파일이 삭제됩니다. 기본값 그대로 사용합니다.
  - Use Origin Cache Headers : 오리진 HTTP 헤더의 캐시 설정(Cache-Control)을 따릅니다. 각 파일마다 캐시 설정을 다르게 할 수 있는 장점이 있습니다. 캐시 설정이 없으면 기본 캐시 유지 시간은 24시간 입니다.
  - Customize : 기본 캐시 유지 시간을 따로 설정합니다.
    - Minimum TTL : 최소 캐시 유지시간 입니다. 초 단위로 설정해야 합니다. 이 Minimum TTL 설정 시간과 오리진 HTTP 헤더의 캐시 설정(Cache-Control) 시간 중 긴 시간이 적용됩니다.
- Forward Cookies : 오리진의 쿠키를 CloudFront를 거쳐 사용자에게 전달할지 설정합니다. 기본값 그대로 사용합니다.
  - None : 쿠키를 전달하지 않습니다. 캐시 성능이 좀더 향상됩니다.
  - Whitelist : 쿠키를 선별하여 전달합니다.
    - Whitelist Cookies : 전달할 쿠키 이름을 설정합니다. 각 쿠키는 새 줄로 구분합니다.
- Forward Query Strings : CloudFront에서 오리진으로 쿼리 문자열을 전달합니다. 오리진에서 쿼리 문자열에 따라 파일을 구분하여 보여주고 싶을 때 설정합니다. 설정하지 않으면 캐시 성능이 향상됩니다. 기본값 그대로 사용합니다.
- Smooth Streaming : 실시간 스트리밍 프로토콜인 Microsoft Smooth Streaming을 사용하고 싶을 때 설정합니다. 기본값 그대로 사용합니다.
- Restrict Viewer Access : Signed URL로 CloudFront 사용을 제한하고 싶을 때 설정합니다. Signed URL에 대해서는 뒤에서 자세히 설명하겠습니다. 기본값 그대로 사용합니다.
- Price Class : 요금 수준입니다. 에지 로케이션 사용 범위를 설정하는데 실제 서비스에서 그다지 필요가 없는 지역을 제외할 때 설정합니다. 세부적으로 설정할 수는 없으며 3가지 옵션이 있습니다. 기본값 그대로 사용합니다.
  - Use Only US and Europe : 미국과 유럽의 에지 로케이션만 사용합니다.
  - Use Only US, Europe and Asia : 미국과 유럽, 아시아의 에지 로케이션만 사용합니다.
  - Use All Edge Locations : 모든 에지 로케이션을 사용합니다. 위의 두 옵션보다는 요금이 많이 나옵니다.
- Alternate Domain Names : Route 53에서 도메인을 연결하려면 이 부분을 설정해야 합니다. 여러 도메인이라면 새 줄로 구분하고 최대 10개까지 설정할 수 있습니다. 각자 구입한 도메인 이름을 설정하면 됩니다. 기본값 그대로 비워둡니다.

### Distribution Settings

- SSL Certificate : HTTPS 프로토콜을 사용하기 위한 인증서 설정입니다. 기본값 그대로 사용합니다.
  - Default CloudFront Certificate : CloudFront의 인증서를 사용합니다.
  - Custom SSL Certificate : 사용자가 구입한 도메인과 인증서를 사용하고 싶을 때 설정합니다. 인증서 저장은 IAM에서 할 수 있습니다.
- Custom SSL Client Support : 커스텀 SSL 클라이언트 설정입니다. 앞에서 Custom SSL Certificate를 설정해야 합니다.
  - All Clients : 전용 IP 사용자 지정 SSL 설정입니다. 자세한 내용은 링크를 참조하기 바랍니다.
    http://aws.amazon.com/ko/cloudfront/custom-ssl-domains/
  - Only Clients that Support Server Name Indication : 서버 이름 표시(SNI)를 설정합니다. 자세한 내용은 링크를 참조하기 바랍니다.
    http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html#cnames-https-dedicated-ip-or-sni
- Default Root Object : CloudFront 배포 도메인의 최상위(Root)로 접속했을 때 기본적으로 보여줄 파일 이름입니다. index.html로 설정합니다.
- Logging : CloudFront 접속 로그 설정입니다. 기본값 그대로 사용합니다.
  - Bucket for Logs : CloudFront 로그를 저장할 S3 버킷을 선택합니다.
  - Log Prefix : S3 버킷에 로그를 저장할 때, 디렉터리 명을 설정합니다.
- Comment : 메모입니다. 추가적인 설명을 기록하고 싶을 때 사용합니다. 기본값 그대로 비워둡니다.
- Distribution State : 배포를 생성한 뒤 배포 상태 설정입니다. Enabled로 설정하면 곧바로 사용할 수 있는 상태가 되며 Disabled로 설정하면 그냥 배포만 생성하고 비활성화 상태로 둡니다. 기본값 그대로 사용합니다.

[출처 : pyrasis](http://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter12/02)
