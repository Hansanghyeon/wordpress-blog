import React from 'react';
// Components
import { Container, Row, Col } from './page.style';

const AboutPage = () => {
  return (
    <>
      <Container>
        <Row.Header />
        <Row>
          <Col col>about</Col>
        </Row>
        <Row.Footer />
      </Container>
    </>
  );
};

export default AboutPage;
