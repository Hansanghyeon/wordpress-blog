import React from 'react';
import { SmLogo } from '@atom/Logo';
import SnsIcon from '@molecule/SNS';

import MenuBtn from '@atom/toggle/Menu';
import { Wrap, Col, Row, Container } from './index.style';

const GNB = () => (
  <Wrap>
    <Container.Inner fluid>
      <Row.def>
        <Col.menu col={1}>
          <MenuBtn />
        </Col.menu>
        <Col.Left auto>
          <SmLogo />
        </Col.Left>
        <Col.def col />
        <Col.Right auto>
          <SnsIcon />
        </Col.Right>
      </Row.def>
    </Container.Inner>
  </Wrap>
);

export default GNB;
