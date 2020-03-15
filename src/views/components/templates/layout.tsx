import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

import Grid from '@style/Grid';
import GNB from '@organism/GNB';
import FNB from '@organism/FNB';
import MSB from '@organism/MSB';

import DefaultTheme, { DarkTheme } from '@style/themes';

const mt = 45;
const MainWrapper = styled.div`
  --mt: ${mt}px;
  margin-top: var(--mt);
  height: calc(100% - var(--mt));
  overflow-y: scroll;
`;
const PageWrap = styled.div`
  display: flex;
  min-height: 100%;
`;
const Main = styled.div`
  width: 100%;
`;

const Layout = ({ children }: any) => {
  const themeContext = useContext(ThemeManagerContext);

  return (
    <>
      <ThemeProvider theme={themeContext.isDark ? DarkTheme : DefaultTheme}>
        <GridThemeProvider gridTheme={Grid}>
          <>
            <GNB />
            <MainWrapper>
              <PageWrap>
                <MSB />
                <Main>{children}</Main>
              </PageWrap>
              <FNB />
            </MainWrapper>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
