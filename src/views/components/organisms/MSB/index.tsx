import React, { useRef } from 'react';
// Components
import { Logo } from '@atom/Logo';
import { MenuStateType } from '@store/Menu';
import useOutsideAlerter from '@utile/useOutsideAlerter';
// Style
import { SideBar, LogoLayout, Main, Row, Col } from './index.style';
// Containers
import DayAndNightToggle from '#/DayAndNight';
import PostTypeAllCat from '#/PostTypeAllCat';
import StaticAllPageList from '#/StaticAllPageList';

interface props extends MenuStateType {
  inFunction?: any;
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
        <Row.Menu>
          <Col.Def col>
            <DayAndNightToggle />
          </Col.Def>
        </Row.Menu>
        <Row.Def>
          <Col.Def col>
            <div>Page</div>
            <StaticAllPageList />
          </Col.Def>
        </Row.Def>
        <Row.Def>
          <Col.Def col>
            <div>Category</div>
          </Col.Def>
          <Col.Def col>
            <PostTypeAllCat />
          </Col.Def>
        </Row.Def>
      </Main>
    </SideBar>
  );
};
export default MSB;
