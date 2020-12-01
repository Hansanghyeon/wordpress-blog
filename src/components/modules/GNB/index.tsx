import Headroom from 'react-headroom';
// Components
import { SmLogo } from '@atom/Logo';
import SnsIcon from '@module/list/SNS';
import MenuToggle from '@atom/toggle/Menu';
import { Wrap, Col, Row, Container } from './style';

const GNB = () => (
  <Headroom>
    <Wrap sidebarOpen={false}>
      <Container.Inner fluid>
        <Row.Def>
          <Col.Menu col={2}>
            <MenuToggle isActive={false} />
          </Col.Menu>
          <Col.Left auto>
            <SmLogo />
          </Col.Left>
          <Col.Def col />
          <Col.Right auto>
            <SnsIcon />
          </Col.Right>
        </Row.Def>
      </Container.Inner>
    </Wrap>
  </Headroom>
);

export default GNB;
