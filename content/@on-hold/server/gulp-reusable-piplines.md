## Gulp 빌드에서 재사용 가능한 파이프 라인 만들기

### 왜 이생각을 했나?

정적인 파일들을 AWS S3에서 배포하려고 gulp 에서 scss를 컴파일하면 s3로 보내주는 작업을 만들었다.
그런데

1. scss → sourcemap 포함하고있는 개발자 버전
2. sourcemap min css → prefix min css 최종 유저들이 로딩해올 정적파일

이렇게 만들다보니까 두가지를 해줘야하는 함수가생겼는데 각각에 s3로 업로드해줘야하는 프로세스가 중복해서 들어가는 것이다. 나중에 이 두개가 더 늘어날 수도있다는 생각에 s3 upload를 함수화해서 불러오고 싶은 생각이 들었다.

### 기존 파이프라인

```js
function scss_mix() {
  return gulp
    .src("...")
    .pipe(stepA())
    .pipe(stepA())
    .pipe(stepA())
    .pipe(gulp.dest("..."));
}
gulp.task("go", function() {
  gulp.watch(
    "./scss/mix/*.scss",
    gulp.series(gulp.parallel(sass_mix), cross_browser)
  );
});
```

출처 : [Making reusable pipelines in a Gulp build](https://paulsalaets.com/posts/reusable-pipelines-in-gulp-build)
