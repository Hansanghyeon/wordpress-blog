import React from 'react';
// Components
import { SmLogo } from '@atom/Logo';
import SnsIcon from '@module/list/SNS';
import MenuToggle from '@atom/toggle/Menu';
import { Wrap, Col, Row, Container } from './style';

const GNB = () => (
  <Wrap sidebarOpen={false}>
    <Container.Inner fluid>
      <Row.Def>
        <Col.Menu col={2}>
          <MenuToggle isActive={false} />
        </Col.Menu>
        <Col.Left auto>
          <SmLogo />
        </Col.Left>
        <Col.Def col />
        <Col.Right auto>
          <SnsIcon />
        </Col.Right>
      </Row.Def>
    </Container.Inner>
  </Wrap>
);

export default GNB;
