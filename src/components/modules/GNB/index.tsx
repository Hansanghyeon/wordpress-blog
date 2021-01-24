import Headroom from 'react-headroom';
// components
import { SmLogo } from '@atom/Logo';
import SnsIcon from '@module/list/SNS';
import { Wrap, Col, Row, Container } from './style';

const GNB = () => (
  <Headroom>
    <Wrap>
      <Container.Inner fluid>
        <Row>
          <Col.Left auto>
            <SmLogo />
          </Col.Left>
          <Col col />
          <Col.Right auto>
            <SnsIcon />
          </Col.Right>
        </Row>
      </Container.Inner>
    </Wrap>
  </Headroom>
);

export default GNB;
