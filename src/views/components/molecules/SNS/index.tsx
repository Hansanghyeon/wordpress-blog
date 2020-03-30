import React from 'react';
import styled from 'styled-components';
import './index.style.scss';
// Components
import Github from '@atom/icons/github';
import Dribbble from '@atom/icons/Dribbble';
import CodeSandbox from '@atom/icons/CodeSandbox';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      color: inherit;
    }
  }
`;

const SnsIcon = () => (
  <Wrap>
    <Dribbble />
    <CodeSandbox />
    <Github />
  </Wrap>
);

export default SnsIcon;
