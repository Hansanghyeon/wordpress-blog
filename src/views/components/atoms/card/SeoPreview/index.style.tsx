import styled from 'styled-components';
import { Row as _Row, Col as _Col, media } from 'styled-bootstrap-grid';

import Link from '@atom/Link';

type styleProps = {
  bg?: string;
};
export const Header = styled.div`
  background-color: ${({ theme }) => theme.color.bg[0]};

  display: flex;
  align-items: center;
  font-size: 10px;
  position: absolute;
  top: 2px;
  left: 0;
  border-radius: 2px;
  padding-right: 2px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.45s;
  will-change: background-color, color;
`;
export const Favicon = styled.div`
  border-radius: 2px;
  overflow: hidden;
  line-height: 0;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  img {
    width: 100%;
  }
`;
export const Url = styled.div`
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Description = styled.div`
  margin-bottom: 4px;
  ${media.md`
    max-height: 3.8rem;
    overflow: hidden;
  `};
`;
export const Col = {
  def: styled(_Col)``,
  Image: styled(_Col)<styleProps>`
    background-image: ${({ bg }) => `url(${bg})`};
    display: none;
    background-size: cover;
    background-position: center;
    ${media.md`
      display: block;
    `};
  `,
  Content: styled(_Col)`
    overflow: hidden;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 12px;
    padding-bottom: 12px;
    ${media.md`
      height: 120px;
    `};
  `,
};
export const Row = {
  def: styled(_Row)``,
  Body: styled(_Row)`
    background-color: ${({ theme }) => theme.color.bg[1]};
    color: ${({ theme }) => theme.color.text[2]};
    font-size: 14px;
    border-radius: 4px;
    box-shadow: inset 0 0 5px 1px rgba(0, 0, 0, 0.1);
    transition: all 0.45s;
    will-change: box-shadow, color, border;
    box-sizing: border-box;
    border: 1px solid transparent;
  `,
};
export const RootWrap = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  padding: 16px 0;
  position: relative;
  text-decoration: none !important;
  &:hover {
    box-shadow: inset 0 0 5px 1px rgba(0, 0, 0, 0);
  }

  ${_Row} {
    margin-left: 0;
    margin-right: 0;
  }
  &:hover {
    ${Header} {
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.bg[1]};
    }
    ${Row.Body} {
      color: ${({ theme }) => theme.color.text[1]};
      border: 1px solid ${({ theme }) => theme.color.text[2]};
    }
  }
`;
