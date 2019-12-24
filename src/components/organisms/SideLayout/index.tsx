import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';

interface Props {
  width?: number;
  bg?: string;
}

const Wrap = styled.div<Props>`
  background: ${(props) => props.bg};
  height: 100%;
  width: ${(props) => `${props.width}px`};
  position: fixed;
  top: 0;
  right: 0;
`;

const Inner = styled(Container)`
  height: 100%;
  padding: 40px;
  background: #fff;
  border-top-left-radius: 40px;
`;

const SideLayout = ({ width, bg }:Props) => (
  <Wrap width={width} bg={bg}>
    <Inner>
      SideLayout
    </Inner>
  </Wrap>
);

export default SideLayout;
