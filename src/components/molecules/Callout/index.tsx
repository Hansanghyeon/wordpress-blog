import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { rhythm, scale } from '@utile/typography';

const Wrap = styled(Container)`
  background-color: ${props => (props.theme.isDark ? '#373b3d' : '#f8f8f9')};
  padding: ${rhythm(1 / 2)};
  margin-bottom: ${rhythm(1)};
  border-radius: px;
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.1);
`;

const ColWrap = styled(Col)`
  display: flex;
  align-items: center;
`;

interface Props {
  icon: string;
  children: any;
}

const Callout = ({ icon, children }: Props) => (
  <Wrap>
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
