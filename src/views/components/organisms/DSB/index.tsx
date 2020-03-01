import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import PCSC from '@molecule/PCSC';

const Wrap = styled.div`
  position: fixed;
  right: 0;
  top: 45px;
  width: 400px;
  height: 100%;
  padding: 10px;
  background-color: ${props => props.theme.color.bg[0]};
`;

const DSB = () => (
  <Wrap>
    <Container>
      <Row>
        <Col col>
          <PCSC />
        </Col>
      </Row>
    </Container>
  </Wrap>
);

export default DSB;
