wordpress monorepo

## Feature

- 배포, 릴리즈 자동화 (CI/CD)
- 폴더구조
- eslint, prettier
- tailwindcss

## CI/CD

- **릴리즈 자동화** 테마 릴리즈 자동화 (테마 빌드결과물 zip으로 에셋 담아줌)
- **배포 자동화** 프로덕션 서버에 rsync로 테마파일 업데이트

## 폴더구조

프로젝트 코드베이스 구성

```shell
$ tree
.  # https://github.com/beeclover/wordpress-docker 참고
|-- Makefile
|-- README.md
|-- apps
|   `-- v1  # wordpress-monorepo 구성!
|       |-- README.md
|       `-- theme (require)
|-- volumes
|   `-- v1
|       |-- wp
|       `-- db
|-- docker-compose.override.yaml
`-- docker-compose.yaml
```

`.vscode/settings.json`에서 `intelephense` 설정을 추가해서 `volumes/v1/wp`의 폴더를 레퍼런스로 가져올수있도록하였다.

## 워드프레스 테마 설정하기 roots/sage (optional)

```sh
# 테마 설치
# https://roots.io/sage/docs/installation/
composer create-project roots/sage your-theme-name
# 테마 설치하고 폴더명면 theme로 변경
mv your-theme-name theme
# 테마에 들어가서 필수 패키지 설치
cd your-theme-name
# https://roots.io/acorn/docs/installation/
composer require roots/acorn
yarn install
```

### typescript 설정하기

```sh
yarn add @roots/bud-esbuild --save-dev
```

### sass 설정하기

```sh
yarn add @roots/bud-sass --save-dev
```