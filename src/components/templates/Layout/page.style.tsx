/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import {
  Container as _Container,
  Row as _Row,
  Col as _Col,
} from 'styled-bootstrap-grid';
//
import { rhythm } from '@style/typography';

const ContainerStyled = styled(_Container)``;
const Container = (props: any) => (
  <ContainerStyled {...props}>{props?.children}</ContainerStyled>
);
Container.Cover = styled(_Container)`
  height: calc(100vh - 120px);
`;
export { Container };

const RowStyled = styled(_Row)`
  margin-bottom: ${rhythm(1)};
`;
const Row = (props: any) => <RowStyled {...props}>{props?.children}</RowStyled>;
Row.Header = styled(_Row)`
  padding-top: 80px;
`;
Row.Footer = styled(_Row)`
  padding-bottom: 80px;
`;
Row.Divider = styled.div`
  margin-bottom: ${rhythm(3)};
`;
export { Row };

const ColStyled = styled(_Col)``;
const Col = (props: any) => <ColStyled {...props}>{props?.children}</ColStyled>;
export { Col };

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

export const LogoWrap = styled.div`
  max-width: 250px;
  max-height: 250px;
  margin-bottom: 40px;
`;
