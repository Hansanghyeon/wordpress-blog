import styled from 'styled-components';
import {
  Container as _Container,
  Row as _Row,
  Col as _Col,
} from 'styled-bootstrap-grid';
//
import { rhythm } from '@style/typography';

export const Container = {
  Def: styled(_Container)``,
  Home: styled(_Container)`
    padding-top: ${rhythm(1)};
    padding-bottom: ${rhythm(1)};
  `,
  Project: styled(_Container)`
    height: 100%;
  `,
};

export const Row = {
  Def: styled(_Row)``,
};

export const Col = {
  Def: styled(_Col)``,
};

export const GridAndListToggleWrap = styled.div`
  margin-left: 1rem;
`;

export const DittoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
export const DepthDittoWrap = styled(DittoWrap)<{ isGrid: boolean }>`
  width: auto;
  ${({ isGrid }) => isGrid && `display: block;`}
`;
