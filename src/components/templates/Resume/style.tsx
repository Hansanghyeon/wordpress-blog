import React from 'react';
import styled from 'styled-components';
import {
  Container as _Container,
  Row as _Row,
  Col as _Col,
} from 'styled-bootstrap-grid';

const ContainerStyled = styled(_Container)``;
const Container = (props: any) => (
  <ContainerStyled {...props}>{props.children}</ContainerStyled>
);

const RowStyled = styled(_Row)`
  margin-bottom: 16px;
`;
const Row = (props: any) => <RowStyled {...props}>{props.children}</RowStyled>;
Row.Header = styled(_Row)`
  margin: 40px 0;
`;
Row.Footer = styled(_Row)`
  margin: 40px 0;
`;

const ColStyled = styled(_Col)``;
const Col = (props: any) => <ColStyled {...props}>{props.children}</ColStyled>;

export { Container, Row, Col };
