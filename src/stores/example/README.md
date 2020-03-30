# Stores

## actions

응용 프로그램 변경을 트리거하는 이벤트

### Flux standard action (FSA)

액션에 관랳서는 FSA 패턴에 따라 액션 객체의 구조를 결정합니다.

```ts
{
  type: 'SomeAction.ACTION_NAME',   // Required
  payload: 'anything',              // Optional
  error: false,                     // Optional
  meta: null,                       // Optional
}
```

- `type`(필수): reducer, saga, 미들웨어등 에게 작업의 의도를 알려주는 고유한 문자열 식별자입니다.
- `payload`(optional): 조치 및 특성과 함게 전송하려는 데이터는 모든 유형의 값일 수 있습니다.
- `error`(optional): 설정된 경우 `true`작업은 오류를 나타내며 `payload` 일조의 오류 데이터를 포함해야 합니다.
- `meta`(optional): `payload`에 속하지 않는 추가 정보를 위한 것이며 해당 정보 및 재산은 모든 유형의 가치일 수 있습니다. 예를 들어, 페이로드 자체에 포함되지 않은 "ID"입니다.

### Static classes for actions

```ts
export default class SomeAction {
  static NORMAL_ACTION = 'SomeAction.NORMAL_ACTION';
  static THUNK_ACTION = 'SomeAction.THUNK_ACTION';

  static normalAction() {
    return {
      type: SomeAction.NORMAL_ACTION,
    };
  }

  static thunkAction() {
    return async (dispatch, getState) => {
      const model = await SomeEffect.requestIt();

      dispatch({
        type: SomeAction.THUNK_ACTION,
        payload: model,
      });
    };
  }
}
```

이런식으로 작성하면 코드 자체가 문서화됩니다. 예를 들어 상점 섹션 `normalAction`에 call를 걸고 있음을 분명히 알 수 있습니다.

```ts
this.props.dispatch(SomeAction.normalAction());
```

아래 예를 통해 어떤 상점 섹션이 속하는지 명확하지 않으며 코드가 책처럼 읽히지 않습니다.

```ts
this.props.dispatch(normalAction());
```

또한 Redux에서 사용할때 어떤 작업 및 작업 그룹이 사용되지는 분명합니다.

```ts
switch (action.type) {
  case SomeAction.NORMAL_ACTION:
    return {
      ...state,
      someProperty: action.payload,
    };
  default:
    return state;
}
```

## effectes

API 를 처리하고 응답 데이터를 삭제합니다.

## models

API 관련 모델

## reducers

글로벌 상점에서 데이터를 추가 / 제거 / 편집 합니다.
