import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

import gridTheme from '@utile/gridTheme';
import GNB from '@organism/GNB';
import FNB from '@organism/FNB';
import DSB from '@organism/DSB';

import darkModeTheme from '@style/darkModeTheme';
import lightModeTheme from '@style/lightModeTheme';

const MainLayout = styled.div`
  margin-top: 45px;
`;
const MainInnerLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto;
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
              <MainInnerLayout>
                <div>
                  {children}
                  <FNB />
                </div>
                <DSB />
              </MainInnerLayout>
            </MainLayout>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
