import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
// Components
import { Logo } from '@atom/Logo';
import { rhythm } from '@style/typography';
import CategoryList from '@molecule/list/Category';
import respondTo from '@style/_respondTo';

const SideBar = styled.div`
  width: 200px;
  height: 100%;
  position: sticky;
  top: -45px;
  margin-top: -45px;
  padding: 0 ${rhythm(1 / 2)};
  font-family: 'Fira Code';
  display: none;
  ${respondTo.hg`
    position: fixed;
    left: 0;
    top: 0;
    margin-top: 0;
  `};
  ${respondTo.md`
    display: block;
  `};
`;

const Main = styled.div`
  height: 100%;
  padding: ${rhythm(1)} 0;
`;

const LogoLayout = styled.div`
  height: 45px;
  width: 100%;
  padding: ${rhythm(1 / 4)} 16px;
  * {
    height: 100%;
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
            <CategoryList />
          </Col>
        </Row>
      </Container>
    </Main>
  </SideBar>
);
export default MSB;
