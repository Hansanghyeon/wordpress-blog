import styled from 'styled-components';
import {
  Container as _Container,
  Row as _Row,
  Col as _Col,
  media,
} from 'styled-bootstrap-grid';

import { rhythm } from '@style/typography';

export const Wrap = styled.div`
  width: 100%;
  height: 45px;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 0 ${rhythm(1 / 2)};
  background: ${({ theme }) => theme.color.bg[0]};
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
`;

export const Col = {
  def: styled(_Col)``,
  Right: styled(_Col)`
    display: flex;
    justify-content: flex-end;
  `,
  Left: styled(_Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: auto;
    }
  `,
  menu: styled(_Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    ${media.md`
      display: none;
    `}
  `,
};

export const Row = {
  def: styled(_Row)``,
};

export const Container = {
  def: styled(_Container)``,
  Inner: styled(_Container)`
    height: 100%;
    > ${_Row} {
      height: 100%;
      > ${_Col} {
        height: 100%;
      }
    }
  `,
};
