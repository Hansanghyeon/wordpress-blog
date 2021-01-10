// style
import { Container, Row, Col } from '../page.style';
// components
import MoreStories from '@module/list/MoreStories';

export type DevType = {
  data: {
    allPosts: any;
  };
};

export default function DevContent({ data }: DevType) {
  const { edges } = data?.allPosts;

  return (
    <Container>
      <Row.Header />
      <Row>
        <Col col>{edges.length > 0 && <MoreStories posts={edges} />}</Col>
      </Row>
      <Row.Footer />
    </Container>
  );
}
