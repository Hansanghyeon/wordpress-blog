# How to use Webpack with react

## 깊이 있는 리액프 개발 환경 구축하기

- React router
- HMR, Hot Module Replacement
- Route
- Vendor
- Webpack
- React

Use Library

- React 16
- React Router 4
- Semantic UI : CSS 프레임워크
- Hot Module Replacement (HMR)
- CSS Autoprefixer
- CSS Modules
- Stage 1 Preset
- Webpack 4
- Route과 Vendor로 코드 분할
- Webpack Bundle Analyzer

## 의존성 초기화

### 1. 앱 디렉터리 생성, `package.json` 파일 생성

```shell
  mkdir webpack-for-react && cd $_
  yarn init -y
```

`package.json` 내용

```json
{
  "name": "webpack-for-react",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

### 2. 프로덕션 의존성, 개발 의존성을 설치

개발 의존성 : 개발 단게에서만 사용되는 의존 라이브러리  
프로덕션 의존성 : 배포 단게에서 사용되는 라이브러리

```js
yarn add react react-dom react-prop-types react-router-dom semantic-ui-react
yarn add babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-1 css-loader style-loader html-webpack-plugin webpack webpack-dev-server webpack-cli -D
```

- react

  리액트

- react-dom

  브라우저 DOM 메서드를 제공한다.

- react-prop-types

  React props 타입을 체크한다.

- react-router-dom

  Provides routing capabilities to React for the browser

- semantic-ui-react

  CSS 프레임 워크

- babel-core

  Babel 핵심 의존성 라이브러리이다. Babel(바벨)은 자바스크립트 ES6를 ES5로 컴파일하여 현재 브라우저가 이해할 수 있도록 변환하는 도구다.

- babel-loader

  babel과 webpack을 사용해 자바스크립트 파일을 컴파일한다.

- babel-preset-env

  ES2015, ES2016, ES2017 버전을 지정하지 않아도 바벨이 자동으로 탐지해 컴파일한다.

- babel-preset-stae-1

  TC39에서 검토 중인 Stage 1 스펙을 사용한다. (stage-0부터 3까지는 EcmaScript 스펙 중에서 비공식 실험적인 기술들을 사용할 수 있게 해주는 프리셋으로 Stage 2와 Stage 3도 사용 가능하다.)

- css-loader

  `import/require()` 처럼 `@import`와 `url()` 해석한다.

- html-webpack-pluin

  애플리케이션을 위한 HTML 파일을 생성하거나 템플릿을 제공한다.

- style-loader

  `<style>` 태그를 삽입하여 CSS에 DOM을 추가한다.

- webpack

  모듈 번들러(Module bundler)

- webpack-cli

  Webpack 4.0.1 이상에서 필요한 커맨드라인 인터페이스다.

- webpack-dev-server

  애플리케이션 개발 서버를 제공한다.

## Babel 설정

최상위 디렉터리 `webpack-for-react` 바벨 설정 파일을 만든다.

```shell
touch .babelrc
```

`.babelrc` 내용은 아래 코드로 추가한다

```json
{
  "presets": ["env", "react", "stage-1"]
}
```

바벨 프리셋(preset) 플러그인을 사용할 수 있게 됐다. 나중에 Webpack에서 `babel-loader`를 호출할 때 어떤 역할을 하는이 이해하게 될 것이다.

## Webpack 설정

지금부터 본격적으로 시작해보자. Webpack 설정 파일을 만들어보다. 터미널에서 아래 명령어를 입력해 `webpack.config.js`을 만든다.

```shell
touch webpack.config.js
```

`webpack.config.js` 파일을 열고 아래 코드를 작성한다.

```js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  // webpack 설정 부분
};
```

웹팩 기본 설정을 마쳤다. 다음으로 `webpack`과 `html-webpack-plugin`이 필요하다. 환경 변수 PROT가 없으면 기본 퐅를 제공하고 모듈을 내보내는일을 한다.

- `webpack.config.js`

```js
...
module.exports = {
  mode: "development"
};
```

설정 사항이 개발 환경(development)인지 프로덕션(production)인지를 알려줬다.

```js
...
module.exports = {
  ...
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js'
  },
};
```

웹팩 인스턴스를 실행하기 위해 `entry`, `output`, `filename`, `devtool`, `module`, `rules` 값을 설정해보자.

- `entry`

  애플리케이션이 진입점(entry point)이다. 리팩으 앱이 있는 위치와 번들링 프로세스가 시작되는 지점이다.

웹팩4에서는 웹팩3과 반대로 `entry`를 생략할 수 있다. `entry`가 없으면 웹팩은 시작점이 `./src` 디렉토리 아래에 있다고 가정한다. 그러나 이 튜토리얼에서는 `entry`를  설정해 시작점을 분명하게 표시하기로 한다. 나중에 이 부분을 삭제해도 된다.

- `output`

  컴파일된 파일을 저장할 경로를 알려준다.

- `filename`

  번들된 파일 이름을 말한다. `[hash]`는 애플리케이션이 수정되어 다시 컴파일 될 때마다 웹팩에서 생성된 해시로 변경해주어 캐싱에 도움이 된다.

```js
...
module.exports = {
  ...
  devtool: 'inline-source-map',
}
```

- `devtool`

  소스 맵을 생성해 애플리케이션 디버깅을 도와준다. 소스 맵에는 여러 가지 유형이 있으며 그 중 inline-source-map은 개발시에만 사용된다.

  ```js
  ...
  module.exports = {
    ...
    module: {
      rules: [

        // 첫 번째 룰
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },

        // 두 번째 룰
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: true,
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
  };
  ```

- `module`

  애플리케이션 내 포함도니느 모듈을 정의한다. 우리의 경우 ESNext(바벨), CSS 모듈에 해당한다.

- `rules`

  각 모듈을 처리하는 방법을 설정한다.

### 첫 번째 룰

`node_modules` 디렉터리를 제외한 자바스크립트 파일을 찾은 다음 `babel-loader`를 통한 바엘을 사용해 바니라 자바스크립트로 변환한다. 바벨은 `.babelrc` 파일에서 설정 내용을 읽는다.

### 두 번째 룰

css 파일을 찾고 `style-loader`와 `css-loader`로 css를 처리한다. 그 다음 `css-loader`에게 CSS 모듈, 카멜 케이스, 소스 맵을 사용할 것을 지시한다.

### CSS 모듈과 카멜 케이스

이제 `import Styles from './style.css'`또는 `import { style1, style2 } from '.styles.css'`와 같이 구조 해체 문법으로 스타일 정의를 할 수 있다.

```js
<div className={Style.style1}>Hello World</div>
// 또는 구조해체 문법을 사용할 수 있다.
<div className={style1}>Hello World</div>
```

아래와 같은 CSS 클래스가 있다면,

```css
.home-button {...}
```

아래 코드와 같이 카멜 케이스를 정의해 CSS 클래스를 가져온다.

```js
import { homeButton } from ".style.css"
```

이제 플러그인을 구성해보자.

`html-webpack-plugin`은 다른 옵션을 가진 객체를 받는다. HTML 템플릿과 favicon을 지정한다. 이후 Bundle Analyzer 및 HMR 용 플러그인을 추가할 것이다.

`webpack.config.js` 파일에 아래 코드를 추가하자

```js
module.exports = {
  ...
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
};
```

마지막으로 개발 서버를 설정한다.

```js
...
module.exports = {
  ...
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  }
};
```

host는 localhost로, port는 기본 port로 할당했다. 현재 기본 port 번호는 3000번이다. histroyApiFallback을 true로, open을 true로 설정한다. 서버를 실행하면 브라우저가 자동으로 열리고 http://localhost:3000에서 애플리케이션이 자동으로 실행된다.



