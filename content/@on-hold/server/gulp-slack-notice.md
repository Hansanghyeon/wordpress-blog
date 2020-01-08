# Gulp logError를 Slack으로 받는 방법

왜? 나는 Gulp logError를 Slack으로 받으려했나

서버를 직접 구성하고 다른 팀원들과 같이 작업할 작업환경을 내가 만들었다. 팀원들은 gulp로 컴파일하는 것에 대한 지식은 없는상태이여서 scss 코드를 작성하다가 오류가나도 log를 보고 해결하기 어려운 상태였다.  
그래서 log message를 우리가 접근하기 쉬운 Slack으로 보여주면 에러가나도 어떤 코드가 잘못됐는지 알기 쉬워지니까 내가 일일이 알려주지 않아도 수정이 가능 하겠다 생각해서 제작하게 되었다.

1. slack 채널을 개설하고 웹훅앱을 추가해준다.

2. `gulp-slack`설치하기

   ```bash
   npm i gulp-slack --save-dev
   ```

3. `gulpfile.js` 설정해주기

   ```js
   const slack = require("gulp-slack")({
     url: "incoming-webhook에서 제공해준 url",
     channel: "", // Optional
     user: "Scss", // Optional
     icon_url: "", // Optional
     icon_emoji: "" // Optional
   });

   function sass_integrated() {
     return gulp
       .src("./scss/intergrated/style.min.scss") // 입력 경로
       .pipe(sourcemaps.init()) // 소스맵
       .pipe(
         sass({ outputStyle: "compressed" }).on("error", function(err) {
           slack([
             {
               text: "에러발생",
               color: "#da1836",
               fields: [
                 {
                   title: "dan4log",
                   value: err.message.toString()
                 }
               ]
             }
           ]);
           console.log(err.message.toString());
           this.emit("end");
         })
       )
       .pipe(sourcemaps.write("/map", { sourcRoot: "." })) // 소스맵 경로 주석첨부
       .pipe(gulp.dest("../public/css/")); // 출력경로
   }
   ```

---

코드 리뷰

3번에서 중요한 부분은 `.on('error', func...` 이부분이다 이전 코드는 `.on('error', sass.logError)`였는데 위처럼 변경하였다.  
`.on('error', sass.logError)`를 이용해서 콘솔에서 에러 메세지를 출력하였다. 분명히 로그의 메세지 값을 따로 사용할 수 있을꺼 같았는데 방법을 찾는대 애좀먹었다.

[참고 사이트](https://scotch.io/tutorials/prevent-errors-from-crashing-gulp-watch)

에러로그를 출력을 여러가지 방법으로 하는법을 포스팅한 글인데 여기서 영감을 얻어서 slack에 메세지를 보낼 수 있게 설정하였다
