import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import useDarkMode from 'use-dark-mode';

import gridTheme from '@src/utils/gridTheme';
import PageHeader from '@molecule/PageHeader';
import GNB from '@organism/GNB';
import FNB from '@organism/FNB';

interface ThemeProperty {
  darkMode: boolean;
  background: string;
  backgroundElevated: string;
  text: string;
}
const darkModeTheme: ThemeProperty = {
  darkMode: true,
  background: '#292929',
  backgroundElevated: '#303437',
  text: '#fff',
};
const lightModeTheme: ThemeProperty = {
  darkMode: false,
  background: '#fff',
  backgroundElevated: '',
  text: '',
};

interface Props {
  location: Location;
  title: string;
  children?: any;
}


const Layout = ({ location, children }: Props) => {
  const darkMode = useDarkMode();
  const MainLayout = styled.div`
    margin-top: 45px;
    height: calc(100% - 45px);
  `;

  return (
    <>
      <ThemeProvider theme={darkMode.value ? darkModeTheme : lightModeTheme}>
        <GridThemeProvider gridTheme={gridTheme}>
          <>
            <GNB />
            <MainLayout>
              <PageHeader location={location} />
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
