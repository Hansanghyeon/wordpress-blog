import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';
// Component
import Grid from '@style/Grid';
import FNB from '@organism/FNB';
import DefaultTheme, { DarkTheme } from '@style/themes';
import { MainWrapper, Main, GlobalStyle } from './index.style';
// Container
import GNB from '#/GNB';
import MSB from '#/MSB';

interface props {
  children: React.ReactNode;
  isDark?: boolean;
}
const Layout = ({ children, isDark }: props) => {
  return (
    <>
      <ThemeProvider theme={isDark ? DarkTheme : DefaultTheme}>
        <GlobalStyle />
        <GridThemeProvider gridTheme={Grid}>
          <>
            <GNB />
            <MSB />
            <MainWrapper>
              <Main className={`layout_main ${isDark ? 'dark' : 'light'}`}>
                {children}
              </Main>
              <FNB />
            </MainWrapper>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
