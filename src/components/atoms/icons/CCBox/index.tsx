import React from 'react';
import styled from 'styled-components';
import {
  FaCreativeCommons,
  FaCreativeCommonsBy,
  FaCreativeCommonsNc,
  FaCreativeCommonsSa,
} from 'react-icons/fa';

const CCBoxWrap = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.text[3]};
  color: ${({ theme }) => theme.colors.text[3]};
  display: flex;
  border-radius: 999px;
  padding: 4px 6px;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
  transition: color 0.45s;
  will-change: color;
  div {
    display: flex;
    align-items: center;
  }
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
  <CCBoxWrap>
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
