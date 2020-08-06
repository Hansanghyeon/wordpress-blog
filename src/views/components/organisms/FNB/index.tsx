import React from 'react';
// components
import Link from '@atom/Link';
import { Container, Row, Col } from './index.style';

const FNB = () => (
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

export default FNB;
