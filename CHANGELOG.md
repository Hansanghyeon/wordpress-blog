# Change Log

이 프로젝트에서 주목할만한 모든 변경 사항이이 파일에 문서화됩니다.
[Keep a Changelog](https://keepachangelog.com/ko/1.0.0/)의 형식을 기본으로 구성됩니다.

## [1.8.1] - 2020-06-06

### Changed

- [#181](https://github.com/Hansanghyeon/4log/issues/181) ~~[Semantic Versioning](https://semver.org/lang/ko/)~~ 프로젝트룰을 제거 독자적 버저닝으로 변경

## [1.8.0] - 2020-06-02

### Add

- [#88](https://github.com/Hansanghyeon/4log/issues/88) 모바일 메뉴관련 버튼 추가 이전에는 모바일 md =< 786 사이즈 이하로 떨어질때 카테고리 메뉴를 완전 제거했는데 버튼을 통한 메뉴 보기 기능을 가하였다. `react-redux`를 활용 나중에 offset 밖영역 클릭도 리듀서를 통한 간단하게 기능추가가 가능함

## [1.7.0] - 2020-06-01

### Add

- [#172](https://github.com/Hansanghyeon/4log/issues/172) 4log 저장소에 적용한 코드에 대한 라이센스 적용

### Changed

- https://github.com/Hansanghyeon/4log/pull/169#issuecomment-636887973 `gh-pages` 제거
- `Theme`관련 타입을 분리하지 않고 한곳으로 구성 코드양이 작아서

## [1.6.0] - 2020-05-30

### Add

- [#160](https://github.com/Hansanghyeon/4log/issues/167) 파일 다운로드 버튼 추가

## [1.5.1] - 2020-05-22

### Fixed

- [#160](https://github.com/Hansanghyeon/4log/issues/160) BMC 컴포넌트 모바일일때 시각적으로 너무 붙어있는 부분 수정
- Grid system에서 브레이크 포인트가 미디어에 딱맞게 되어있어서 1px씩 올림

## [1.5.0] - 2020-05-20

### Fixed

- [#156](https://github.com/Hansanghyeon/4log/issues/156) `styled-bootstrap-grid`에서 미디어쿼리에관한 코드가 있는지 모르고 scss에서 자주 사용하던 respond-to 기능을 만들어서 사용하던것을 제거하고 모듈로 사용할수있는 미디어타입으로 전부 교체

## [1.4.0] - 2020-05-20

### Add

- [#114](https://github.com/Hansanghyeon/4log/issues/114) 바이오섹션에 Buy me a coffee 버튼 추가

## [1.3.0] - 2020-05-17

### Add

- [#116](https://github.com/Hansanghyeon/4log/issues/116) 포스트페이지에서 시리즈관련 포스트들에 관한 컴포넌트를 추가

### Fixed

- AniLink 플러그인 인자 스펠링오타 수정


## [1.2.4] - 2020-05-14

### Changed

- [#148](https://github.com/Hansanghyeon/4log/issues/148) 메인페이지 그리드뷰가 부적합하게 레이아웃이 짜여진다. div가 일렬로 느려트려놓은 dom tree여서 일렬중에 한 DOM element만 높이가 높아지면 부적합한 그리드 레이아웃이 형성되는 스타일 수정

## [1.2.3] - 2020-05-14

### Refactoring

- Ditto 컴포넌트 Scss -> styled-components로만 구성하게 변경

## [1.2.2] - 2020-05-13

### Changed

- 모바일 적용 스타일 코드 모바일에서 제외 되었던 것 다시 추가 기본값으로

### Fixed

- Grid 시스템에서 media query 기능을 분리 기존에 sass에서 유용하게 사용하던 respond-to 함수를 ts로 구현했던 것 제거하고 query를 그냥 타이핑 적용

## [1.2.1] - 2020-05-11

### Changed

- 메인 코딩테스트 포스트 제외

### Fixed

- [#138](https://github.com/Hansanghyeon/4log/issues/138) 모바일에서 스크롤 허용하게 수정

## [1.2.0] - 2020-05-10

### Added

- [#141](https://github.com/Hansanghyeon/4log/issues/141) 코드블럭 라인넘버

### Changed

- 워드프레스 기본 블럭정렬 클래스값 스타일 적용
- 인라인 코드블럭 `white-psace: pre`관련 수정
- 코드블럭 언어타입없으면 인라인 코드블럭으로 취급에러 수정

## [1.1.0] - 2020-05-09

### Added

- [#124](https://github.com/Hansanghyeon/4log/issues/124) 코드블럭
  - 파일이름이 있으면 표시
  - 코드언어 대표 Material 아이콘으로 표시

### Changed

- Eslint rule: `*.style.tsx` 파일은 기본값으로 export 해야하는 규직을 제외