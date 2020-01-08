# 시놀로지 Transsmision 토렌트완료 자동삭제

다운로드 스테이션에서 RSS추가가 네트워크 이상으로떠서 결국에 해결방법을 찾지못하고 Transsmision으로 넘어왔다. 그런데 토렌트를 추가해서 다운로드받고 nplayer에서 영상을보다 마음에안들어 삭제하고싶어 삭제를해도 데이터 삭제로 Transsmission에서 다시 또 다운로드되는 것은 막고싶었다.

피어를 유지하기도 싫었고...

> 이건 개인의 자유와 선택입니다.

그럼 해결방법 Let's go!

## Tutorial

1. Transmission stop
    
    <img width="" height="" src="https://4log.dev/20190912143937/transmission-auto-deleted-001.png"></img>
    
2. nas SSH 접속
    
3. AutoDelete.sh 파일 구성
    
    생성경로는 저와 똑같이 않아도됩니다. 대신 파일 경로는 기억해두세요. 저는 편의를 위해서 그냥 한폴더내에 파일도 생성할 것입니다. 저는 텍스트에디터로 vim을 사용하였습니다.
    
    ```zsh
    sudo su
    cd /usr/local/transmission/var
    vim AutoDelete.sh
    ```
    
    ```vim
    # AutoDelete.sh

    #!/bin/sh
    SERVER="9091 --auth 아이디:비밀번호"
    TORRENTLIST=`transmission-remote $SERVER --list | sed -e '1d;$d;s/^ *//' | cut --only-delimited --delimiter=" " --fields=1`
    for TORRENTID in $TORRENTLIST
    do
        DL_COMPLETED=`transmission-remote $SERVER --torrent $TORRENTID --info | grep "Percent Done: 100%"`
        STATE_STOPPED=`transmission-remote $SERVER --torrent $TORRENTID --info | grep "State: Seeding\|Stopped\|Finished\|Idle"`
        if [ "$DL_COMPLETED"  ] && [ "$STATE_STOPPED"  ]; then
            transmission-remote $SERVER --torrent $TORRENTID --remove
        fi
    done
    ```
    
4. AutoDelete.sh 권한 수정
    
    ```zsh
    sudo chown sc-transmission:transmission AutoDelete.sh
    sudo chmod 777 AutoDelete.sh
    ```
    
5. Transmission setting.json 수정

    setting.json 수정으로 AutoDelete.sh 실행적용해주면됨
    
    ```vim
    # /usr/local/transmission/var/setting.json
    ...
    "script-torrent-done-enabled": true,
    "script-torrent-done-filename": "/usr/local/transmission/var/AutoDelete.sh",
    ```
    
6. Transmission 시작
    
    패키지매니져에서 다시 실행하면됩니다.
    
7. 토렌트파일로 다운로드후 자동으로 삭제되나 테스트해보기

---

궁금하신 것이 있다면 댓글 남겨주세요 🙏

Happy Hacking 🔥