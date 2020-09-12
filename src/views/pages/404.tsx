import React from 'react';
import SEO from '@view/components/seo';
import Animation404 from '#/Animation404';
import { Container, Row, Col } from './page.style';

const NotFoundPage: React.FC = () => (
  <>
    <SEO title="404: Not Found" />
    <Container.Cover>
      <Row.Header />
      <Row>
        <Col col>
          <Animation404 />
        </Col>
      </Row>
      <Row>
        <Col col>
          <h1 style={{ display: 'none' }}>Not Found</h1>
        </Col>
      </Row>
      <Row.Footer />
    </Container.Cover>
  </>
);

export default NotFoundPage;
