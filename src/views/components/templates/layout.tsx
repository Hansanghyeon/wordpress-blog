import React, { useContext } from 'react';
import styled, {
  ThemeProvider,
  createGlobalStyle,
  css,
} from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

import Grid from '@style/Grid';
import GNB from '@organism/GNB';
import FNB from '@organism/FNB';
import MSB from '@organism/MSB';

import DefaultTheme, { DarkTheme } from '@style/themes';

const MainWrapper = styled.div`
  --mt: 45px;
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

const _GlobalStyle = css`
  body {
    background-color: ${({ theme }) => theme.color.bg[1]};
    color: ${({ theme }) => theme.color.text[0]};
    a {
      color: ${({ theme }) => theme.color.text[0]};
      &:hover {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;
const GlobalStyle = createGlobalStyle`
  ${_GlobalStyle}
`;

const Layout = ({ children }: any) => {
  const themeContext = useContext(ThemeManagerContext);

  return (
    <>
      <ThemeProvider theme={themeContext.isDark ? DarkTheme : DefaultTheme}>
        <GlobalStyle />
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
