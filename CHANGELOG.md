# Change Log

이 프로젝트에서 주목할만한 모든 변경 사항이이 파일에 문서화됩니다.
[Keep a Changelog](https://keepachangelog.com/ko/1.0.0/)의 형식을 기본으로 구성됩니다.
[Semantic Versioning](https://semver.org/lang/ko/) 프로젝트를 고수합니다.

## [1.2.2] - 2020-05-13

### Changed

- 모바일 적용 스타일 코드 모바일에서 제외 되었던 것 다시 추가 기본값으로

### Fixed

- Grid 시스템에서 media query 기능을 분리 기존에 sass에서 유용하게 사용하던 respond-to 함수를 ts로 구현했던 것 제거하고 query를 그냥 타이핑 적용

## [1.2.1] - 2020-05-11

### Changed

- 메인 코딩테스트 포스트 제외

### Fixed

- 모바일에서 스크롤 허용하게 수정

## [1.2.0] - 2020-05-10

### Added

- 코드블럭 라인넘버 [#141](https://github.com/Hansanghyeon/4log/issues/141)

### Changed

- 워드프레스 기본 블럭정렬 클래스값 스타일 적용
- 인라인 코드블럭 `white-psace: pre`관련 수정
- 코드블럭 언어타입없으면 인라인 코드블럭으로 취급에러 수정

## [1.1.0] - 2020-05-09

### Added

- 코드블럭 [PR#140](https://github.com/Hansanghyeon/4log/pull/140) [ISSUE#124](https://github.com/Hansanghyeon/4log/issues/124)
  - 파일이름이 있으면 표시
  - 코드언어 대표 Material 아이콘으로 표시

### Changed

- Eslint rule: `*.style.tsx` 파일은 기본값으로 export 해야하는 규직을 제외