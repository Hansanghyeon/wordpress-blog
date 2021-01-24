import Headroom from 'react-headroom';
// components
import { SmLogo } from '@atom/Logo';
import SnsIcon from '@module/list/SNS';
// Containers
import MenuBtn from '@atom/toggle/Menu/container';
// style
import { GNBWrap, Wrap, Col, Row, Container } from './style';

const GNB: React.FC<MenuStateType> = ({ isActive }: MenuStateType) => (
  <GNBWrap sidebarOpen={isActive}>
    <Headroom>
      <Wrap>
        <Container.Inner fluid>
          <Row>
            <Col.Menu col={2}>
              <MenuBtn />
            </Col.Menu>
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
  </GNBWrap>
);

export default GNB;
