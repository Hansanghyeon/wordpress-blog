# 시놀로지 NAS 외부 네트워크드라이브 webDav 설정

`저는 Synology DS218+ 사용자입니다.`

윈도우에서 외부 네트워크드라이브를 설정해도 접속이 안되는 경우가 있습니다.

이유는 webDab는 SSL 보안등급 1에서는 네트워크 드라이브를 연결할 수 없다.  
기본적으로 윈도우는 SSL 보안등급 1로 설정되어있습니다.

위 사항을 수정하면 연결은 할 수 있지만 제대로 이용하려면 파일당 최대 전송량을 변경해주어야합니다.
기본적으로 윈도우는 50MB 까지 전송으로 제한이 설정되어있습니다.

레지스트리 편집으로 위 제한들을 해제하기

1. window + R
2. regedit
3. HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters 경로로 이동 파일수정
4. BasicAuthLevel → 값 데이터 2
5. FileSizeLimitlnBytes → 16진수 → ffffffff
6. 재부팅으로 적용하기

webDab로 연결된 네트워크 드라이브 용량은 로컬 머신의 스토리지 용량과 같다.  
무슨소리냐면 내 NAS는 총용량 8TB에 7TB가 비어있는 상태인데, 외부에서는 접속하는 PC의 하드디스크가 1TB 짜리고 400GB를 사용한 상태하면 총용량 0.4TB/1TB로 표시된다. 이게 그냥 webDav 프로토콜 자체의 문제라고 한다.
