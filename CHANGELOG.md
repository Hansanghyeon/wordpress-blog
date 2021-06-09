# Change Log

이 프로젝트에서 주목할만한 모든 변경 사항이이 파일에 문서화됩니다.
[Keep a Changelog](https://keepachangelog.com/ko/1.0.0/)의 형식을 기본으로 구성됩니다. 현재 버전은 [#181](https://github.com/Hansanghyeon/4log/issues/181)위와 같은 내용으로 구성됩니다.

## [v7.1.0-2w] 2021-05-30

### Added

- CHANGELOG.md 다시 작성하기 시작!

### Chagned

- SNS Share UI를 css로 숨김처리하였었다.<br/>
  그래서 php 조건문을 통해서 에디터와 관리자만 보이게 수정

## [v7.1.0-1w] 2021-05-29 (#641)

### Added

- SNS 공유기능 추가 (카카오톡)<br/>
  관리자일때 모든 페이지를 공유할 수 있도록 admin sns share UI를 제작함
- docker-compose dev 모드 prod 모드 파일추가
- workspace 추가

### Changed

- css root (light)<br/>
  라이트모드의 누런느낌의 색상을 변경
- loader 페이드아웃 타이밍 수정
- `a:visited` 색상 수정

## [v7.0.0]

[roots/sage: WordPress starter theme with a modern development workflow](https://github.com/roots/sage)를 사용해서 워드프레스 laravel를 활용한 커스텀 테마 제작

모든 react components, page를 전부 `*.blade.php` 코드로 변경

## [v5.15.0 ~ v6.0.0]

체인지 로그를 재대로 남기지 못함 😭

## [v5.14.3] - 2020-10-12

### Changed

- Notion List style 컴포넌트를 bit으로 관리이전

## [v5.14.2] - 2020-10-12

### Removed

- Project Page 프로젝트를 개인 이력으로 이전을 위해서 제거

## [v5.14.1] - 2020-10-10

### Changed

- 메뉴버튼 `MenuBtn`의 Redux에서 전달하는 dispatch 액션을 isActive 값을통해서 함수실행여부 분기

## [v5.14.0] - 2020-09-12

### Added

- 'gatsby-plugin-sitemap` 추가
- 404 페이지 애니메이션 추가

### Changed

- `@fortawesome/*` 패키지는 `react-icons`로 변경 사용하기 매우 편리하다.

### Fixed

- 코드블럭에서 마지막 라인의 코드에 번호가 붙어서 나오는 거 수정
- 워드프레스 코드에서 이미지의 높이를 지정해서 불러오는거 스타일 수정

## [v5.13.1] - 2020-09-11

### Fixed

- #392 코드블럭 태그찾는 정규식 수정으로 오류 해결

## [v5.13.0] - 2020-09-10

### Added

- Lottie 애니메이션중 [UnderMaintenance](https://lottiefiles.com/6873-under-maintenance) 추가

### Changed

- Theme Color 눈에 보기 편하게 색조정
- About Page에서 푸터사라지는 것 수정 푸터사라지지 않게

## [v5.12.0] - 2020-09-10

### Added

- About Page 추가

### Changed

- About Page Redux 상태 적용
- 패키지 최신화
- react-hook에 맞게 타입들 변경

## [v5.11.0] - 2020-08-14

### Changed

- project 임시 페이지 완료 더이상 아이디어가 없어서 진행하지 못함
- Redux 레이아웃 타입 추가

## [v5.10.3] - 2020-08-09

### Fixed

- `html-react-parser` 패키지가 코드블럭의 string으로 표현되어야할 태그들까지 모두 html tag로 변경해주는 것을 `parser`를 사용할때 `options`에다가 원본 string값을 넘겨서 노출되지않던 부분까지 모두 보이게 수정

## [v5.10.2] - 2020-07-05

### Fixed

- `wp-graphql` 플러그인 업데이트로 `mediaItemUrl` 쿼리가 node로 구분되어서 여러개 구성할수있게 변경되었다. 이부분을 반영해서 오류 나던부분 제거

## [v5.10.1] - 2020-06-24

### Fixed

- 모든 카테고리가 페이지로 만들어지지 않는 오류 수정
  - 이유는 기본적으로 GraphQL이 가져오는 갯수가 10개라서 이부분을 임의적으로 9999개로 변경시킴

### Changed

- `Row, Col`의 기본값을 객체화시켜서 내보낼때 `def`, `menu`와 같이 소문자로 작성했는데 이부분이 `eslint` 룰에 어긋나서 이 부분 수정

## [v5.10.0] - 2020-06-09

### Add

- `useOutsideAlerter` `ref`로 설정된 컴포넌트 외부 클릭시 받은 함수 실행하도록하는 커스텀 훅 제작

### Changed

- `Layout` > `MSB`와 메인을 감싸고있던 wrap구조를 변경
- `Layout` > `layout.tsx` 에서 폴더로 구조변경하고 스타일 파일 따로 생성 연결
- `MSB` HTML 돔순서를 변경해서 디바이스 중간사이즈에서도 `position: fixed`로 고정
  - `GNB` MSB의 상태에따라 스타일추가 - Redux 상태사용
  - `Layout > Main` MBS의 상태에 따라 스타일 추가 - Redux 상태사용

## [v5.9.0] - 2020-06-07

### Changed

- `SeoPreview` 컴포넌트의 포스트의 스타일 속성인 `text-decation`이 적용되는 것을 예외처리(제거)

## [v5.8.4] - 2020-06-07

### Fixed

- `CardWrap` 첫번째 헤딩요소의 `margin-top` 스타일 제거

## [v5.8.3] - 2020-06-06

### Fixed

- `TOC` revoke refactor...

## [v5.8.2] - 2020-06-06

### Fixed

- `MSB` 스타일 코드 누락부분 추가

## [v5.8.1] - 2020-06-06

### Changed

- [#181](https://github.com/Hansanghyeon/4log/issues/181) ~~[Semantic Versioning](https://semver.org/lang/ko/)~~ 프로젝트룰을 제거 독자적 버저닝으로 변경

## [v5.8.0] - 2020-06-02

### Add

- [#88](https://github.com/Hansanghyeon/4log/issues/88) 모바일 메뉴관련 버튼 추가 이전에는 모바일 md =< 786 사이즈 이하로 떨어질때 카테고리 메뉴를 완전 제거했는데 버튼을 통한 메뉴 보기 기능을 가하였다. `react-redux`를 활용 나중에 offset 밖영역 클릭도 리듀서를 통한 간단하게 기능추가가 가능함

## [v5.7.0] - 2020-06-01

### Add

- [#172](https://github.com/Hansanghyeon/4log/issues/172) 4log 저장소에 적용한 코드에 대한 라이센스 적용

### Changed

- https://github.com/Hansanghyeon/4log/pull/169#issuecomment-636887973 `gh-pages` 제거
- `Theme`관련 타입을 분리하지 않고 한곳으로 구성 코드양이 작아서

## [v5.6.0] - 2020-05-30

### Add

- [#160](https://github.com/Hansanghyeon/4log/issues/167) 파일 다운로드 버튼 추가

## [v5.5.1] - 2020-05-22

### Fixed

- [#160](https://github.com/Hansanghyeon/4log/issues/160) BMC 컴포넌트 모바일일때 시각적으로 너무 붙어있는 부분 수정
- Grid system에서 브레이크 포인트가 미디어에 딱맞게 되어있어서 1px씩 올림

## [v5.5.0] - 2020-05-20

### Fixed

- [#156](https://github.com/Hansanghyeon/4log/issues/156) `styled-bootstrap-grid`에서 미디어쿼리에관한 코드가 있는지 모르고 scss에서 자주 사용하던 respond-to 기능을 만들어서 사용하던것을 제거하고 모듈로 사용할수있는 미디어타입으로 전부 교체

## [v5.4.0] - 2020-05-20

### Add

- [#114](https://github.com/Hansanghyeon/4log/issues/114) 바이오섹션에 Buy me a coffee 버튼 추가

## [v5.3.0] - 2020-05-17

### Add

- [#116](https://github.com/Hansanghyeon/4log/issues/116) 포스트페이지에서 시리즈관련 포스트들에 관한 컴포넌트를 추가

### Fixed

- AniLink 플러그인 인자 스펠링오타 수정


## [v5.2.4] - 2020-05-14

### Changed

- [#148](https://github.com/Hansanghyeon/4log/issues/148) 메인페이지 그리드뷰가 부적합하게 레이아웃이 짜여진다. div가 일렬로 느려트려놓은 dom tree여서 일렬중에 한 DOM element만 높이가 높아지면 부적합한 그리드 레이아웃이 형성되는 스타일 수정

## [v5.2.3] - 2020-05-14

### Refactoring

- Ditto 컴포넌트 Scss -> styled-components로만 구성하게 변경

## [v5.2.2] - 2020-05-13

### Changed

- 모바일 적용 스타일 코드 모바일에서 제외 되었던 것 다시 추가 기본값으로

### Fixed

- Grid 시스템에서 media query 기능을 분리 기존에 sass에서 유용하게 사용하던 respond-to 함수를 ts로 구현했던 것 제거하고 query를 그냥 타이핑 적용

## [v5.2.1] - 2020-05-11

### Changed

- 메인 코딩테스트 포스트 제외

### Fixed

- [#138](https://github.com/Hansanghyeon/4log/issues/138) 모바일에서 스크롤 허용하게 수정

## [v5.2.0] - 2020-05-10

### Added

- [#141](https://github.com/Hansanghyeon/4log/issues/141) 코드블럭 라인넘버

### Changed

- 워드프레스 기본 블럭정렬 클래스값 스타일 적용
- 인라인 코드블럭 `white-psace: pre`관련 수정
- 코드블럭 언어타입없으면 인라인 코드블럭으로 취급에러 수정

## [v5.1.0] - 2020-05-09

### Added

- [#124](https://github.com/Hansanghyeon/4log/issues/124) 코드블럭
  - 파일이름이 있으면 표시
  - 코드언어 대표 Material 아이콘으로 표시

### Changed

- Eslint rule: `*.style.tsx` 파일은 기본값으로 export 해야하는 규직을 제외