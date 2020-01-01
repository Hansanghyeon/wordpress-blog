import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { rhythm } from '@src/utils/typography';
import useDarkmode from 'use-dark-mode';
import { darkModeType } from '@src/utils/interface';
import colorTheme from '@src/utils/colorTheme';
import { SmLogo } from '@atom/Logo';
import SnsIcon from '@molecule/SNS';

const Wrap = styled.div<darkModeType>`
  width: 100%;
  height: 45px;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 0 ${rhythm(1 / 2)};
  background: ${(props) => (props.darkMode ? colorTheme.darkMode[0] : colorTheme.lightMode[0])};
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
`;

const Inner = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${rhythm(1 / 4)};
`;

const GNB = () => {
  const darkMode = useDarkmode();
  return (
    <Wrap darkMode={darkMode.value}>
      <Inner fluid>
        <SmLogo />
        <div>
          <SnsIcon />
        </div>
      </Inner>
    </Wrap>
  );
};

export default GNB;
