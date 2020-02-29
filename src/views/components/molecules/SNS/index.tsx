import React from 'react';
import Github from '@atom/icons/github';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const SnsIcon = () => (
  <Wrap>
    <Github />
  </Wrap>
);

export default SnsIcon;
