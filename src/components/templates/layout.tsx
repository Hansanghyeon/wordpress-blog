import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

import gridTheme from '@utile/gridTheme';
import PageHeader from '@molecule/PageHeader';
import GNB from '@organism/GNB';
import FNB from '@organism/FNB';

import darkModeTheme from '@src/styles/darkModeTheme';
import lightModeTheme from '@src/styles/lightModeTheme';

const MainLayout = styled.div`
  margin-top: 45px;
`;

const Layout = ({ children }: any) => {
  const themeContext = useContext(ThemeManagerContext);

  return (
    <>
      <ThemeProvider
        theme={themeContext.isDark ? darkModeTheme : lightModeTheme}
      >
        <GridThemeProvider gridTheme={gridTheme}>
          <>
            <GNB />
            <MainLayout>
              <PageHeader />
              {children}
              <FNB />
            </MainLayout>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
