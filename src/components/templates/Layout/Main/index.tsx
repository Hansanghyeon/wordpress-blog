// style
import { Container, Row, Col } from '../page.style';
// components
import Intro from '@/intro';
import MoreStories from '@module/list/MoreStories';

export type MainType = {
  data: {
    allPosts: any;
  };
};

export default function MainContent({ data }: MainType) {
  const { edges } = data.allPosts;

  return (
    <Container>
      <Row.Header />
      <Row>
        <Col col>
          <Intro />
        </Col>
      </Row>
      <Row>
        <Col col>{edges.length > 0 && <MoreStories posts={edges} />}</Col>
      </Row>
      <Row.Footer />
    </Container>
  );
}
