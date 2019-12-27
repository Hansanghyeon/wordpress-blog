import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import Logo from '../../atoms/Logo/svg';

interface Props {
  width?: number;
}

const Wrap = styled.div<Props>`
  height: 100%;
  width: ${(props) => `${props.width}px`};
  background: #0f4c81;
  position: fixed;
  color: #0e0448;
  padding: 20px;
  box-shadow: 0px 0px 25px 3px rgba(0,0,0,0.5);
  top: 0;
  left: 0;
`;

const Inner = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
