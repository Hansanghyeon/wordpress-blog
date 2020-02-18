import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { rhythm } from '@utile/typography';

const Footer = styled(Container)`
  padding-top: ${rhythm(1)};
  padding-bottom: ${rhythm(1)};
  font-size: 0.8rem;
`;

const FNB = () => (
  <Footer>
    <Row>
      <Col col>
        <footer>
          © 2019 Hansanghyeon
          <br />
          Powered by&nbsp;
          <a href="https://www.gatsbyjs.org">Gatsby</a>.
        </footer>
      </Col>
    </Row>
  </Footer>
);

export default FNB;
