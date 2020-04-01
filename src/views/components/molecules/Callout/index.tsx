import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { rhythm, scale } from '@style/typography';
import { darken, transparentize } from 'polished';

interface StyledProps {
  bgColor: string;
  isDark?: boolean;
}

// NOTE
// "Callout은 MDX에서 사용하기때문에 렌더링할때 props에서 theme 값을 가져올 수 없다."
const Wrap = styled(Container)<StyledProps>`
  background-color: ${({ bgColor, isDark, theme }) => {
    let _color;
    if (bgColor !== '') {
      _color = isDark ? transparentize(0.4, darken(0.2, bgColor)) : bgColor;
    } else {
      [, _color] = theme.color.bg;
    }
    return _color;
  }};
  padding: ${rhythm(1 / 2)};
  margin-bottom: ${rhythm(1)};
  border-radius: 4px;
  word-break: keep-all;
  box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
`;

const ColWrap = styled(Col)`
  display: flex;
  align-items: center;
`;

interface Props extends StyledProps {
  icon: string;
  children: React.ReactNode;
}

const Callout = ({ icon, children, bgColor, isDark }: Props) => (
  <Wrap bgColor={bgColor} isDark={isDark}>
    <Row style={{ margin: 0 }}>
      <span
        role="img"
        aria-label=""
        style={{
          ...scale(0.4),
        }}
      >
        {icon}
      </span>
      <ColWrap col>{children}</ColWrap>
    </Row>
  </Wrap>
);

export default Callout;
