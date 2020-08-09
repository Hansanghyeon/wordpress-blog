import styled from 'styled-components';
import {
  Container as _Container,
  Row as _Row,
  Col as _Col,
} from 'styled-bootstrap-grid';

export const Container = {
  Screen: styled(_Container)`
    height: calc(100vh - 45px);
  `,
  Def: styled(_Container)`
    padding-top: 45px;
    padding-bottom: 45px;
  `,
};

export const Row = {
  Def: styled(_Row)``,
};

export const Col = {
  Def: styled(_Col)``,
};
