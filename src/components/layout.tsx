import React from 'react';
import { Link } from 'gatsby';
import { BaseCSS, GridThemeProvider, Container } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';
import { rhythm, scale } from '../utils/typography';
import gridTheme from './config/gridTheme';
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

  return (
    <>
      <BaseCSS />
      <ThemeProvider theme={styledTheme}>
        <GridThemeProvider gridTheme={gridTheme}>
          <>
            <GNB />
            <div className="mainContainer">
              <Container>
                <header>
                  {header}
                </header>
                <main>{children}</main>
                <footer>
                  © 2019 Hansanghyeon
                  <br />
                  Powered by
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                  .
                </footer>
              </Container>
            </div>
            <div className="side">
              <Container>
                side
              </Container>
            </div>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
