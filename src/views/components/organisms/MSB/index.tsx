import React, { useRef } from 'react';
// Components
import { Logo } from '@atom/Logo';
import { MenuStateType } from '@store/rootStore';
import useOutsideAlerter from '@utile/useOutsideAlerter';
// Containers
import DayAndNightToggle from '#/DayAndNight';
import PostTypeAllCat from '#/PostTypeAllCat';
// Style
import { SideBar, LogoLayout, Main, Row, Col } from './index.style';

interface props extends MenuStateType {
  inFunction: any;
}
const MSB: React.FC<props> = ({ isActive, inFunction }: props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter({ ref: isActive && wrapperRef, inFunction });
  return (
    <SideBar ref={wrapperRef} isActive={isActive}>
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
};
export default MSB;
