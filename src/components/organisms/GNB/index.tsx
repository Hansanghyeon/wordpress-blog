import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import Logo from '../../atoms/Logo';

const Wrap = styled.div`
  height: 100%;
  width: 100px;
  background: #0f4c81;
  position: fixed;
  color: #0e0448;
  padding: .5rem;
`;

const Inner = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
`;

const GNB = () => (
  <Wrap>
    <Inner>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <div>menu</div>
    </Inner>
  </Wrap>
);

export default GNB;
