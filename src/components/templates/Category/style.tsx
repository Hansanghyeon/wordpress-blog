import styled from 'styled-components';
import { rhythm } from '@style/typography';
import {
  Container as _Container,
  Row as _Row,
  Col as _Col,
} from 'styled-bootstrap-grid';

const Row = _Row as typeof _Row & {
  Start: typeof _Row;
  End: typeof _Row;
};
Row.Start = styled(_Row)`
  padding-bottom: ${rhythm(2)};
`;
Row.End = styled(_Row)`
  padding-bottom: ${rhythm(2)};
`;
export { Row };

const Container = _Container as typeof _Container & {
  CoverHeight: typeof _Container;
};
Container.CoverHeight = styled(_Container)`
  min-height: calc(100vh - var(--gnb-height, 45px) - var(--fnb-height, 70px));
`;
export { Container };

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: ${rhythm(1)};

  img {
    max-width: 78px;
    margin-bottom: 0;
  }
  h1 {
    font-family: 'Nanum Gothic';
    margin-bottom: 0;
  }
`;
