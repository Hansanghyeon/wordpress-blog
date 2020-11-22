import { GridThemeProvider } from "styled-bootstrap-grid";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
// style
import { MainWrapper, Main, GlobalStyle } from "./style";
import Grid from "@style/Grid";
import Theme, { DarkTheme } from "@style/Themes";
// state
// components
// import GNB from "@organism/GNB";
import FNB from "@organism/FNB";

const Layout: React.FC = ({ children }) => {
  const darkMode = useDarkMode();
  return (
    <>
      <ThemeProvider theme={darkMode.value ? DarkTheme : Theme}>
        <GlobalStyle />
        <GridThemeProvider gridTheme={Grid}>
          <>
            <MainWrapper msbType="hidden" sidebarOpen={false}>
              {darkMode.value}
              <Main>{children}</Main>
              <FNB type="default" />
            </MainWrapper>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
