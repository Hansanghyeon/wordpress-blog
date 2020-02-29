import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import PCSC from '@molecule/PCSC';

const DSB = () => (
  <Container>
    <Row>
      <Col col>test</Col>
      <Col col>
        <PCSC />
      </Col>
    </Row>
  </Container>
);

export default DSB;
