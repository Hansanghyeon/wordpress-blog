import React from 'react';
// Component
import { ThemeStateType } from '@store/Theme';
import { Wrap, Col, Row, Emoji } from './index.style';

// NOTE
// "Callout은 MDX에서 사용하기때문에 렌더링할때 props에서 theme 값을 가져올 수 없다."

interface Props extends ThemeStateType {
  children: React.ReactNode;
  data: {
    icon: string;
    bgColor: string;
  };
}

const Callout = ({ children, isDark, data }: Props) => {
  const { icon, bgColor } = data;
  return (
    <Wrap bgColor={bgColor} isDark={isDark}>
      <Row.Def>
        <Emoji role="img" aria-label="">
          {icon}
        </Emoji>
        <Col.Text col>{children}</Col.Text>
      </Row.Def>
    </Wrap>
  );
};

export default Callout;
