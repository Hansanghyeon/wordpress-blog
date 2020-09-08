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
Container.Home = styled(_Container)`
  padding-top: ${rhythm(1)};
  padding-bottom: ${rhythm(1)};
`;
Container.Project = styled(_Container)`
  height: 100%;
`;
export { Container };

const RowStyled = styled(_Row)``;
const Row = (props: any) => <RowStyled {...props}>{props?.children}</RowStyled>;
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
