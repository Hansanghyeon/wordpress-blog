import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { rhythm, scale } from '@src/utils/typography';

import gridTheme from '@src/utils/gridTheme';
import GNB from './organisms/GNB';

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
  }

  const gnbWidth: number = 100;

  const MainLayout = styled.div`
    margin-left: ${gnbWidth}px;
    height: 100%;
  `;
  const Inner = styled.div`
    height: 100%;
    transition: all .5s;
  `;

  return (
    <>
      <ThemeProvider theme={styledTheme}>
        <GridThemeProvider gridTheme={gridTheme}>
          <>
            <GNB width={gnbWidth} />
            <MainLayout>
              <Inner>
                {header}
                {children}
                <footer>
                  © 2019 Hansanghyeon
                  <br />
                  Powered by
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                  .
                </footer>
              </Inner>
            </MainLayout>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
