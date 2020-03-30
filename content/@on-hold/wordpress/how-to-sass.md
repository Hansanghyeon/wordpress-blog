내가 워드프레스에서 SCSS/SASS를 사용하는방법
===========================================
하우-투 가이드
-------------

Node.js npm을 이용한다. 그러므로 npm을 이용할수있어야하는 서버환경이어야한다.

1. 사용할 테마 child로 이동한다.
2. gulp, gulp-sass를 설치해준다.

    ```bash
    npm install gulp --save-dev && npm install gulp-sass --save-gulp
    ```

3. gulpfile.js 를 만들어준다

    ```javascript
    // gulpfile.js
    var gulp = require('gulp')
    var sass = require('gulp-sass')

    // 일반 컴파일
    gulp.task('sass', function () {
      return gulp.src('./src/scss/*.scss')  // 입력 경로
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));  // 출력 경로
    });

    // 런타임 중 파일 감시
    gulp.task('sass:watch', function () {
      gulp.watch('./src/scss/*.scss', gulp.series('sass'));  // 입력 경로와 파일 변경 감지 시 실행할 Actions(Task Name)
    });
    ```

4. screen 패키지를 설치해준다(선택).  

    Screen을 설치하는 이유  
    나는 모든 파일작업을 SFTP를 통해서 파일을 열어 저장하고 결과물을 확인하는 작업환경이다.  
    그렇기때문에 서버에서 SCSS/SASS 파일이 수정될때마다 자동적으로 컴파일해서 원래 파일에 덮어 씌워줘야한다.  
    물론 Cli에서 gulp watch를 통해서도 가능하지만 커맨드라인을 닫으면 무용지물이되는게 너무 비효율적이었다.  
    그러면 내가 Cli에서 gulp watch를 실행하고있지않아도 백그라운드에서 실행해주고있으면 되지않을까? 그래서 Screen을 설치하는 것이다 Screen은 cli를 백그라운드에서 실행시켜줄수있게 해주는 패키지다.  
    덕분에 이동중에 코드를 수정할수있고 아이패드로도 작업을 할수있는 환경이 만들어졌다. 그래서 Screen을 설치하는 것이다.  
    이 부분은 선택적인 것이니 설치해도되고 안해도된다.

5. Screen -dsML 명령어로 gulpfile.js를 실행해준다.
