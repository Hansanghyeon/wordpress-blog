import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import Logo from '../../atoms/Logo';

interface Props {
  width?: number;
}

const Wrap = styled.div<Props>`
  height: calc(100% - 40px);
  width: ${(props) => `${props.width}px`};
  position: fixed;
  box-shadow: 0px 2px 6px 1px rgba(0,0,0,0.3);
  top: 20px;
  left: 0;
  border-radius: 0 20px 20px 0;
  overflow: hidden
`;

const Inner = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #0e0448;
  background: #0f4c81;
`;

const LogoWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  width: 100%;
`;

const GNB = ({ width }:Props) => (
  <Wrap width={width}>
    <Inner>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <div>menu</div>
    </Inner>
  </Wrap>
);

export default GNB;
