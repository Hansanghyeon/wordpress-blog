import * as React from 'react';
import Button from "./index";

export default {
  title: 'components|basic/Button',  // 스토리북에서 보여질 그룹과 경로를 명시
  component: Button,                // 어떤 컴포넌트를 문서화 할지 명시
}
export const standard = () => <Button>Hello Button</Button>;
export const emoji = () => <Button> 😀 😎 👍 💯 </Button>;