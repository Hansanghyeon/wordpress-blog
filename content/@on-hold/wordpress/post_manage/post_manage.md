# 포스트를 깃헙으로 관리하는 방법
예전부터 포스트를 워드프레스에서만 관리하기에는 데이터가 소실될 위험이있지 않을까? 하는 생각을했다.  
하지만 워드프레스에는 백업 플러그인도 잘되어있고 여러번 써왔기 때문에 한참동안은 불안감없이 사용했다.  
데이터를 잃어버리고 나서 후회하는 나 자신을 알기에 백업 기능이 좋지만 그래도 2차백업이 필요하다 생각해서 2차백업 프로세스를 만들려한다.
- 예전 : 워드프레스 글작성 ▶︎ Duplicator (사이트전체 백업)
- 현재 : github markdown 작성 ▶ Markdown Github(워드프레스 플러그인) 불러오기 ▶ Duplicator
---
### 포스트 작성
깃헙 저장소로 Markdown 형식으로 글을작성해서 깃헙에 올린다.
### 포스트 가져오기
1. 깃헙에 저장소에 접근가능한 토큰을 만들어준다.
2. [md_github token=YourToken url=Github URL] 포스트에 숏코드로 md파일을 불러온다.

내가 원하던대로 글은 깃헙에 저장해서 데이터가 없어질일이 없고 마크다운을 지원하니까 글을 쓰기 편하다.

### 코드블럭 꾸미기
코드를 작성하는데 있어서 하나의 만족감인 테마 나는 Draculra를 되게 좋아한다 하지만 마크다운 코드블럭에서는 깃헙테마로 나오니까 이걸 무조껀 바꿔야지 했다.  
구글 검색을 통해서 jekyll에서 코드블럭 테마 css를 구해서 적용했죠.  
제작한 css 깃헙에서 다운받아 사용할 수 있습니다.

참고  
[Syntax-Theme](https://github.com/StylishThemes/Syntax-Themes)  
[Syntax-Theme preview](https://stylishthemes.github.io/Syntax-Themes/pygments/)  
[Markdown Github plugin](https://wordpress.org/plugins/markdown-github/)

