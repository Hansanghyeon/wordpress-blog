import React from 'react';
// Components
import { Logo } from '@atom/Logo';
// Containers
import DayAndNightToggle from '#/DayAndNight';
import PostTypeAllCat from '#/PostTypeAllCat';
import { SideBar, LogoLayout, Main, Row, Col } from './index.style';

type props = {
  isActive?: boolean;
};
const MSB: React.FC<props> = ({ isActive }: props) => (
  <SideBar isActive={isActive}>
    <LogoLayout>
      <Logo />
    </LogoLayout>
    <Main>
      <Row.menu>
        <Col.def col>
          <DayAndNightToggle />
        </Col.def>
      </Row.menu>
      <Row.def>
        <Col.def col>
          <PostTypeAllCat />
        </Col.def>
      </Row.def>
    </Main>
  </SideBar>
);
export default MSB;
