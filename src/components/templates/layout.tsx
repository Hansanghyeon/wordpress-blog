import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';

import gridTheme from '@src/utils/gridTheme';
import PageHeader from '@molecule/PageHeader';
import GNB from '@organism/GNB';
import FNB from '@organism/FNB';

interface styledTheme {
  mainColor: string;
}
const styledTheme: styledTheme = {
  mainColor: 'purple',
};

interface Props {
  location: Location;
  title: string;
  children?: any;
}


const Layout = ({ location, children }: Props) => {
  const MainLayout = styled.div`
    margin-top: 45px;
    height: calc(100% - 45px);
  `;

  return (
    <>
      <ThemeProvider theme={styledTheme}>
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
