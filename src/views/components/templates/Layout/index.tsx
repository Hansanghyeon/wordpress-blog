import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';
// store
import { LayoutComponentType } from '@store/Layout';
import { MenuStateType } from '@store/Menu';
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
  msbType,
  location,
  renderToFunction,
}: props) => {
  useEffect(() => {
    const { pathname } = location;
    renderToFunction(pathname);
  });
  return (
    <>
      <ThemeProvider theme={isDark ? DarkTheme : DefaultTheme}>
        <GlobalStyle />
        <GridThemeProvider gridTheme={Grid}>
          <>
            <GNB />
            <MSB type={msbType} />
            <MainWrapper msbType={msbType} sidebarOpen={isActive}>
              <Main className={`layout_main ${isDark ? 'dark' : 'light'}`}>
                {children}
              </Main>
              <FNB type={fnbType} />
            </MainWrapper>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
