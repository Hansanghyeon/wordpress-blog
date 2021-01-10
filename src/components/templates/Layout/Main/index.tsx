// style
import { Container, Row, Col } from '../page.style';
// components
import Intro from '@atom/Intro';
import styled from 'styled-components';

const PageWrap = styled.div`
  min-height: calc(100vh - 45px - 72px);
`;

export default function MainContent() {
  return (
    <PageWrap>
      <Container>
        <Row.Header />
        <Row>
          <Col col>
            <Intro />
          </Col>
        </Row>
        <Row>
          <Col col></Col>
        </Row>
        <Row.Footer />
      </Container>
    </PageWrap>
  );
}
