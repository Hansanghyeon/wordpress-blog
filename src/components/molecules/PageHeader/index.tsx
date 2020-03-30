import React from 'react';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import { Logo } from '@atom/Logo';
import { rhythm } from '@utile/typography';
import { globalHistory } from '@reach/router';

import DarkModeToggle from '@atom/DarkModeToggle';

const Wrap = styled(Container)`
  padding-top: ${rhythm(3)};
  margin-bottom: ${rhythm(3)};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const PageIcon = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 5px;
`;

const PageHeader = () => {
  const rootPath = '/';
  const { location } = globalHistory;
  let header;
  if (location.pathname === rootPath || location.pathname === '/about') {
    header = (
      <Wrap>
        <PageIcon>
          <Logo />
        </PageIcon>
        <DarkModeToggle />
      </Wrap>
    );
  } else {
    header = <div />;
  }

  return header;
};

export default PageHeader;
