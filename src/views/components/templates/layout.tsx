import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

import gridTheme from '@utile/gridTheme';
import { rhythm } from '@utile/typography';
import GNB from '@organism/GNB';
import FNB from '@organism/FNB';
import DSB from '@organism/DSB';
import MSB from '@organism/MSB';

import { LightTheme, DarkTheme } from '@style/Theme';

const MainLayout = styled.div`
  margin-top: 45px;
`;
const MainInnerLayout = styled.div`
  margin-left: 100px;
  margin-right: 400px;
  padding-top: ${rhythm(2)};
`;

const Layout = ({ children }: any) => {
  const themeContext = useContext(ThemeManagerContext);

  return (
    <>
      <ThemeProvider theme={themeContext.isDark ? DarkTheme : LightTheme}>
        <GridThemeProvider gridTheme={gridTheme}>
          <>
            <GNB />
            <MSB />
            <DSB />
            <MainLayout>
              <MainInnerLayout>
                <div>
                  {children}
                  <FNB />
                </div>
              </MainInnerLayout>
            </MainLayout>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
