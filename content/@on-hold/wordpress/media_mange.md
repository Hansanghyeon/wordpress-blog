# 나는 워드프레스 미디어를 어떻게 관리하나?

블로그를 워드프레스로 운영하면서 미디어 관련 부분이 정리하고싶다는 생각이 계속 들었었다.  
기본적으로 워드프레스의 미디어는 따로 정리가 없이 등록해놓은 순서대로 한 폴더에 다넣어 놓은 느낌이라고 보면 된다. 나만 이게 불편한가? 그래서 해결해보기로 했다.  
일단 미디어를 저장할때 날짜별 구분 옵션, 미디어 사이즈별 자동 생성 두가지 옵션은 끄고 시작할꺼다.  
나는 처음부터 업로드할때 용도가 지정되어있어서 자동으로 파일이 나눠질 필요가 없고, 한가지 미디어 파일이 많아지는 것이 관리하기 어려워서 끄는 것이다.

**[WP Real Media Library](https://codecanyon.net/item/wordpress-real-media-library-media-categories-folders/13155134?gclid=Cj0KCQjwyoHlBRCNARIsAFjKJ6C1PoD0JuV6WVsyq89gCaKyFxtdZzrlUTma1bCIGbe7s5ahDNrZ1tYaAmgYEALw_wcB)**

장점 : add-on 플러그인이 있다! 미디어 라이브러리의 폴더 구조를 FTP > upload에 미디어 폴더구조랑 동일하게 만들수있는 add-on이 있다.

**[WP Real Physical Media](https://codecanyon.net/item/wordpress-real-physical-media-physical-media-library-folders-seo-rewrites/23104206)**  

단점 : 폴더를 드래그해서 옮기고 하는 것이 없다. 전체보기를 숨길 수 없었다. (사진은 드래그로 옮길수 있다)

**[FileBird](https://codecanyon.net/item/media-folders-manager-for-wordpress/21715379)**

장점 : WP Real Media 플러그인에 비해서 폴더를 드래그하고 사진을 드래그해서 옮기고 하는 ui/ux가 직관적이어서 관리하기 편하다.  
단점 : 프론트 부분에서만 폴더를 구별해 줄수있고 FTP로 upload 폴더에서는 예전과 똑같은 모습을 볼수있다.  

upload 폴더안도 깨끗히 정리하고싶은 사람은 WP Real Media Library를 사용하면 좋을꺼같고 상관없다면 FileBird를 쓰는게 좋다고 생각한다. UX/UI는 FileBrid가 좀더 예쁘고 깔끔하다.

:heavy_plus_sign:  

**[Offload media](https://deliciousbrains.com/wp-offload-media/)**  
미디어를 AWS S3, digitalOcean, google Cloud로 저장을 할 수 있게해준다. 결제하고 사용하는 것은비싸지만 라이트버전으로 설치할 수 있으니까 최대한 외부에 저장하는 걸 고려해보는게 좋다.

**[Media File Renamer (Auto Rename)](https://wordpress.org/plugins/media-file-renamer/)**  
미디어의 파일을 저장할때 이름을 바꿔주는 것

---

미디어 관리를 서버내 폴더에서 구성해서 관리했을때 조합  

WP Real Media Library + WP Real Physical Media + Media File Renamer (Auto Rename)  
위처럼 구성하면 컴퓨터에서 관리하던 방식의 파일구조로 정리할 수 있다.

미디어 관리를 AWS S3를 사용하면서 선택한 플러그인 조합  

WP Real Media Library + Offload media + C3 Cloudfront Cache Controller
