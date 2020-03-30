import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import DarkModeButton from '@atom/DarkModeToggle';

interface Props {
  width?: number;
  bg?: string;
}
const Wrap = styled.div<Props>`
  background: ${props => props.bg};
  height: calc(100% - 40px);
  width: ${props => `${props.width}px`};
  position: fixed;
  top: 20px;
  right: 0;
`;

const Inner = styled(Container)`
  height: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 20px 0 0 20px;
`;

const SideLayout = ({ width, bg }: Props) => (
  <Wrap width={width} bg={bg}>
    <Inner>
      <DarkModeButton />
    </Inner>
  </Wrap>
);

export default SideLayout;
