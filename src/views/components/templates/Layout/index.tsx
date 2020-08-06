import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';
// store
import { MenuStateType, LayoutComponentType } from '@store/rootStore';
// Component
import Grid from '@style/Grid';
import FNB from '@organism/FNB';
import DefaultTheme, { DarkTheme } from '@style/themes';
import { MainWrapper, Main, GlobalStyle } from './index.style';
// Container
import GNB from '#/GNB';
import MSB from '#/MSB';

interface props extends MenuStateType, LayoutComponentType {
  children: React.ReactNode;
  isDark?: boolean;
  location: { pathname: string };
  renderToFunction: any;
}
const Layout: React.FC<props> = ({
  children,
  isDark,
  isActive,
  fnbType,
  location,
  renderToFunction,
}: props) => {
  const { pathname } = location;
  renderToFunction(pathname);
  return (
    <>
      <ThemeProvider theme={isDark ? DarkTheme : DefaultTheme}>
        <GlobalStyle />
        <GridThemeProvider gridTheme={Grid}>
          <>
            <GNB />
            <MSB />
            <MainWrapper sidebarOpen={isActive}>
              <Main className={`layout_main ${isDark ? 'dark' : 'light'}`}>
                {children}
              </Main>
              <FNB fnbType={fnbType} />
            </MainWrapper>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
