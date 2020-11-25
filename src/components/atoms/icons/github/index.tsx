import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const LinkWrap = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.text[0]};
  display: flex;
  align-items: center;
`;

const Github: React.FC = () => {
  return (
    <LinkWrap href={`https://github.com/hansanghyeon`}>
      <FaGithub />
    </LinkWrap>
  );
};

export default Github;
