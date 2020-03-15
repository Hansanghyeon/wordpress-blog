import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
// Components
import { Logo } from '@atom/Logo';
import { rhythm } from '@style/typography';
import CategoriesNav from '@molecule/nav/Categories';

const SideBar = styled.div`
  width: 200px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  padding: 0 16px;
  font-family: 'Fira Code';
`;

const Main = styled.div`
  height: 100%;
  padding: ${rhythm(1 / 2)} 0;
`;

const LogoLayout = styled.div`
  height: 45px;
  display: flex;
  width: 100%;
  padding: ${rhythm(1 / 4)} 16px;
  svg {
    width: auto;
  }
`;

const MSB = () => (
  <SideBar>
    <LogoLayout>
      <Logo />
    </LogoLayout>
    <Main>
      <Container>
        <Row>
          <Col col>
            <CategoriesNav />
          </Col>
        </Row>
      </Container>
    </Main>
  </SideBar>
);
export default MSB;
