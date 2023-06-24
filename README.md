2014년부터 나름의 버전관리를해가면서 블로그를 운영했습니다. 개발자가 되기전의 블로그부터 블로그로 개발자가 되었다고해도 과언이 아닙니다. 그런데 요즘 제가 작성해놓은 글들을 보면 자괴감이 들었습니다. 제가 작성한 글들이 대부분 지식정리 간단한 오류해결 글다운 글을 작성하지 못했네요

새롭게 시작하기위해서 지금까지의 여정을 모두 놔두고 새롭게 시작해보려합니다.

저는 디지털 가드닝으로 다시금 저의 생각의 네트워크를 정리해보려합니다.

---

### v9.0.0 Nextjs + Wordpress faustjs
- [[headless wordpress (monorepo - nextjs)]]
- [[headless wordpress (monorepo - faustjs)]]

- 방문자 통계기능
  - GA to [umami-software/umami: Umami is a simple, fast, privacy-focused alternative to Google Analytics.](https://github.com/umami-software/umami)

### [v8.0.0 WordPress + roots/sage 10 (dev)](https://v8.archive.hyeon.pro)


### [v7.0.0 WordPress + roots/sage 9](https://github.com/Hansanghyeon/blog/tree/v7.1.0-2w)


### [v6.0.0 Next.js + WordPress(Headless)](https://github.com/Hansanghyeon/blog/tree/v6.0.0)

이전에 Gatsby에서는 미리 데이터를 받아와서 빌드된 홈페이지 파일들로 구성했던것을 api로 실시간 요청을 통해 데이터를 업데이트하는 방식으로 구성하면 어떨까? 고민하면서 여러 방법을 찾다가 Next.js SSR로 구성하면 좋을 것같아서 Next.js로 구성하게되었습니다.

Gatsby에서도 API 콜로 데이터 구성을 해도되지만 Next.js가 핫해서 똑같이 구성해보고싶어서 블로그 구성을 통해 연습겸 시도하였습니다.

[마지막으로 커밋](https://github.com/Hansanghyeon/blog/tree/80b4612e84573b807fb31cb3ef87be9139089eb9)


### [v5.0.0 Gatsby + WordPress(Headless)](https://github.com/Hansanghyeon/blog/tree/v5.15.0)

컨텐츠 관리면에서 `*.md`로 관리하는 것보다 이전에 워드프레스에서 관리하던 것이 너무나 편리하고 좋았기 때문에 고민하였습니다.  
이대로 워드프레스로 돌아가야 하는 것인가? 🤔  
마크다운에서 사용할 ui말고도 다른 더 다양한 ui들을 사용하고 싶었고 또한 컨텐츠 관리또한 쉽게하고싶다 생각해서 Gatsby에서 Graphql로 워드프레스에 데이터만 가져오는 방식인 Headless WordPress라는 개념으로 자료를 찾고 구현하였습니다

그래서 현재 워드프레스는 오로지 CMS로만 사용하고 내부에 커스텀 블럭으로 여러가지 UI를 적용할 수 있는 블럭들로 컨텐츠를 관리합니다


### v4.0.0 Gatsby (React)

홈페이지에서 자바스크립트를 이용한 인터렉션과 같은 재미난 기술들을 사용하고 싶어서 React를 이용한 Gatsby에서 서비스를 하기로 마음먹었습니다.


### [v3.0.0 워드프레스](https://v3.archive.hyeon.pro/)

워드프레스로 서비스를 제작하는 경험을 해보고 블로그 자체를 워드프레스로 좀더 티스토리보다 자유롭게 구성하고 꾸밀수 있어서 이전해왔습니다.

티스토리와는 다르게 플러그인이라는 개념이있어서 유용한 기능들을 플러그인을 통해서 경험할 수 있어서 이전을 결정했던 것같아요

워드프레스에서는 컨텐츠를 관리하고 유저를 관리하고 여기서 멈추지 않고 직접 필요한 유틸리티를 개발해서 사용할 수 있고 이런 부분이 매력적이어서 계속 사용하였습니다.

이 때는 워드프레스의 전체적인 개념을 이해하지 못해서 모두 플러그인과 테마로 구성을 해보았고

`style.css` `script.js`를 많이 작업한 것같습니다.


### v2.0.0 티스토리

네이버 블로그를 운영하면서 블로그 스킨, 자유로운 커스텀에 이끌려 티스토리로 이전해왔습니다.


### v1.0.0 네이버 블로그

제가 먹어본 맛집, 내가 알고 있는 간단한 정보들, 독후감, 영화 감상문 등등

저의 경험을 공유하였습니다. 그중 영화 감상문 비중이 제일 컸습니다. 꿈이 VFX, 영화에 관련된 일들이어서 영화를 많이 보고 내가 이 영화를 보고 어떤 것들을 느꼈는지 기록했었습니다.