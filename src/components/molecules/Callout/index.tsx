import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { rhythm, scale } from '@utile/typography';
import { darken, lighten } from 'polished';

interface StyledProps {
  bgColor?: string;
}

const Wrap = styled(Container)<StyledProps>`
  background-color: ${props =>
    props.bgColor
      ? `${
          props.theme.isDark
            ? darken(0.2, props.bgColor)
            : lighten(0.2, props.bgColor)
        }`
      : props.theme.mdx.callout};
  padding: ${rhythm(1 / 2)};
  margin-bottom: ${rhythm(1)};
  border-radius: 4px;
  word-break: keep-all;
`;

const ColWrap = styled(Col)`
  display: flex;
  align-items: center;
`;

interface Props extends StyledProps {
  icon: string;
  children: React.ReactNode;
}

const Callout = ({ icon, children, bgColor }: Props) => (
  <Wrap bgColor={bgColor}>
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
