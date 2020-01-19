import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { rhythm } from '@utile/typography';
import { SmLogo } from '@atom/Logo';
import SnsIcon from '@molecule/SNS';

const Wrap = styled.div`
  width: 100%;
  height: 45px;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 0 ${rhythm(1 / 2)};
  background: ${props => props.theme.background};
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
`;

const Left = styled.div``;
const Right = styled.div`
  display: flex;
`;

const Inner = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${rhythm(1 / 4)};
  > ${Left}, > ${Right} {
    height: 100%;
  }
`;

const GNB = () => (
  <Wrap>
    <Inner fluid>
      <Left>
        <SmLogo />
      </Left>
      <Right>
        <SnsIcon />
      </Right>
    </Inner>
  </Wrap>
);

export default GNB;
