import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';

import gridTheme from '@src/utils/gridTheme';
import PageHeader from '@molecule/PageHeader';
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


const Layout = ({ location, children }: Props) => {
  const MainLayout = styled.div`
    margin-top: 45px;
    height: 100%;
  `;

  return (
    <>
      <ThemeProvider theme={styledTheme}>
        <GridThemeProvider gridTheme={gridTheme}>
          <>
            <GNB />
            <MainLayout>
              <PageHeader location={location} />
              {children}
              <footer>
                © 2019 Hansanghyeon
                <br />
                Powered by
                <a href="https://www.gatsbyjs.org">Gatsby</a>
                .
              </footer>
            </MainLayout>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
