import React from 'react';
import styled from 'styled-components';
import {
  FaCreativeCommons,
  FaCreativeCommonsBy,
  FaCreativeCommonsNc,
  FaCreativeCommonsSa,
} from 'react-icons/fa';
import Link from '@atom/Link';

const CCBoxWrap = styled(Link)`
  border: 2px solid ${({ theme }) => theme.color.text[3]};
  color: ${({ theme }) => theme.color.text[3]};
  display: flex;
  border-radius: 999px;
  padding: 0px 6px;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
  transition: color 0.45s;
  will-change: color;
  div:first-child {
    margin-right: 6px;
  }
  div:last-child svg {
    margin-right: 2px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const CCBox: React.FC = () => (
  <CCBoxWrap
    href="https://creativecommons.org/licenses/by-nc-sa/2.0/kr/"
    target="_blank"
  >
    <div>
      <FaCreativeCommons />
    </div>
    <div>
      <FaCreativeCommonsBy />
      <FaCreativeCommonsNc />
      <FaCreativeCommonsSa />
    </div>
  </CCBoxWrap>
);

export default CCBox;
