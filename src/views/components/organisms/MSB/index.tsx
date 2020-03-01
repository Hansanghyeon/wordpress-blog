import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import { Logo } from '@atom/Logo';

const LogoWrap = styled.div`
  max-width: 80px;
`;
const Wrap = styled.div`
  padding: 10px;
  position: fixed;
  left: 0;
  top: 45px;
  width: 100px;
  background-color: ${props => props.theme.color.bg[0]};
  height: 100%;
`;

const MSB = () => (
  <Wrap>
    <Container>
      <Row>
        <Col col>
          <LogoWrap>
            <Logo />
          </LogoWrap>
        </Col>
      </Row>
      <Row>
        <Col col>test</Col>
      </Row>
    </Container>
  </Wrap>
);

export default MSB;
