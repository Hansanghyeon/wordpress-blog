import React from 'react';
// etc
import { MenuStateType } from '@store/Menu';
// Components
import { SmLogo } from '@atom/Logo';
import SnsIcon from '@molecule/SNS';
// Containers
import MenuBtn from '#/MenuBtn';
import { Wrap, Col, Row, Container } from './index.style';

const GNB: React.FC<MenuStateType> = ({ isActive }: MenuStateType) => (
  <Wrap sidebarOpen={isActive}>
    <Container.Inner fluid>
      <Row.Def>
        <Col.Menu col={2}>
          <MenuBtn />
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
