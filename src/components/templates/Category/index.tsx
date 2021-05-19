import { Col } from 'styled-bootstrap-grid';
import { Container, Row, TitleWrap } from './style';
import InboxList from '@module/list/Inbox';

export default function Category({ data }: any) {
  const { mediaItemUrl } = data?._acf_taxonomy_category_list.icon;
  const { name, description } = data;
  const { posts } = data;

  return (
    <Container.CoverHeight>
      <Row.Start />
      <Row>
        <Col col>
          <TitleWrap>
            <img src={mediaItemUrl} alt="" />
            <h1>{name}</h1>
          </TitleWrap>
          <p>
            {description?.split('\n').map((text: string) => (
              <>
                <span>{text}</span>
                <br />
              </>
            ))}
          </p>
        </Col>
      </Row>
      <Row>
        <Col col>
          <InboxList data={posts} />
        </Col>
      </Row>
      <Row.End />
    </Container.CoverHeight>
  );
}
