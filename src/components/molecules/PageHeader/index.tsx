import React from 'react';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import { Logo } from '@atom/Logo';
import { rhythm } from '@src/utils/typography';

import DarkModeToggle from '@atom/DarkModeToggle';

interface Props {
  location: Location;
  children?: any;
}

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

const PageHeader = ({ location }: Props) => {
  const rootPath = '/';
  let header;
  if (location.pathname === rootPath) {
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
