import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
// Components
import { Logo } from '@atom/Logo';
import { rhythm } from '@style/typography';
// Containers
import DayAndNightToggle from '#/DayAndNight';
import PostTypeAllCat from '#/PostTypeAllCat';
import { SideBar, LogoLayout, Main } from './index.style';

const MSB = () => (
  <SideBar>
    <LogoLayout>
      <Logo />
    </LogoLayout>
    <Main>
      <Container>
        <Row style={{ marginBottom: rhythm(1) }}>
          <Col col>
            <DayAndNightToggle />
          </Col>
        </Row>
        <Row>
          <Col col>
            <PostTypeAllCat />
          </Col>
        </Row>
      </Container>
    </Main>
  </SideBar>
);
export default MSB;
