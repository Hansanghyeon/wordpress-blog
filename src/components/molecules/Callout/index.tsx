import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { rhythm, scale } from '../../../utils/typography';

const Wrap = styled(Container)`
  background-color: #f8f8f9;
  padding: ${rhythm(1 / 2)};
  margin-bottom: ${rhythm(1)};
`;

const ColWrap = styled(Col)`
  display: flex;
  align-items: center;
`;

interface Props {
  icon: string;
  children: any;
}

const Callout = ({ icon, children }:Props) => (
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
      <ColWrap col>
        {children}
      </ColWrap>
    </Row>
  </Wrap>
);

export default Callout;
