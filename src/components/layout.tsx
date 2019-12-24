import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import {
  BaseCSS,
  GridThemeProvider,
  Container,
  Row,
  Col,
} from 'styled-bootstrap-grid';
import { rhythm, scale } from '../utils/typography';

import gridTheme from './config/gridTheme';
import GNB from './organisms/GNB';
import SideLayout from './organisms/SideLayout';

interface styledTheme {
  mainColor: string;
}
const styledTheme: styledTheme = {
  mainColor: 'purple',
};

interface Props {
  location: Location;
  title: string;
  children?: any;
}


const Layout = ({ location, title, children }: Props) => {
  const rootPath = '/';
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          {title}
        </Link>
      </h3>
    );
  }

  const gnbWidth: number = 100;

  const mainBg = '#f2f4f7';
  const MainContainer = styled.div`
    margin-left: ${gnbWidth}px;
    margin-right: ${gridTheme.breakpoints.xs}px;
    background-color: ${mainBg};
    padding: 40px;
    height: 100%;
    border-bottom-right-radius: 40px;
  `;

  return (
    <>
      <BaseCSS />
      <ThemeProvider theme={styledTheme}>
        <GridThemeProvider gridTheme={gridTheme}>
          <>
            <GNB width={gnbWidth} />
            <MainContainer>
              <Container>
                <Row>
                  <Col col>
                    <header>
                      {header}
                    </header>
                  </Col>
                </Row>
                <main>{children}</main>
                <footer>
                  © 2019 Hansanghyeon
                  <br />
                  Powered by
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                  .
                </footer>
              </Container>
            </MainContainer>
            <SideLayout width={gridTheme.breakpoints.xs} bg={mainBg} />
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
