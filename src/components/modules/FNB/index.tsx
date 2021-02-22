import React from 'react';
// components
import Link from 'next/link';
import { Container, Row, Col } from './style';

const DefaultFNB: React.FC = () => (
  <Container.Footer fluid>
    <Container.Def>
      <Row.Def>
        <Col.Copyright col>
          <Link href="https://github.com/Hansanghyeon/4log/blob/master/LICENSE">
            Copyright (c) 2019-2020 999hyeon
          </Link>
        </Col.Copyright>
      </Row.Def>
    </Container.Def>
  </Container.Footer>
);

export default DefaultFNB;
