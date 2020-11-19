import styled from 'styled-components';
import {
  Container as _Container,
  Row as _Row,
  Col as _Col,
} from 'styled-bootstrap-grid';
// utile
import { rhythm } from '@style/typography';

export const Container = {
  Def: styled(_Container)``,
  Footer: styled(_Container)`
    padding-top: ${rhythm(1)};
    padding-bottom: ${rhythm(1)};
    font-size: 0.8rem;
    background-color: ${({ theme }) => theme.color.bg[0]};
    color: ${({ theme }) => theme.color.text[0]};
  `,
};
export const Row = {
  Def: styled(_Row)``,
};
export const Col = {
  Def: styled(_Col)``,
  Copyright: styled(_Col)`
    text-align: center;
  `,
};
