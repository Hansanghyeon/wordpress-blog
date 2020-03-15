import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { rhythm } from '@style/typography';
import { SmLogo } from '@atom/Logo';
import SnsIcon from '@molecule/SNS';

const Wrap = styled.div`
  width: 100%;
  height: 45px;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 0 ${rhythm(1 / 2)};
  background: ${props => props.theme.color.bg[0]};
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
`;

const LeftCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: auto;
  }
`;
const RightCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
`;

const Inner = styled(Container)`
  height: 100%;
  > ${Row} {
    height: 100%;
    > ${Col} {
      height: 100%;
    }
  }
`;

const GNB = () => (
  <Wrap>
    <Inner fluid>
      <Row>
        <LeftCol auto>
          <SmLogo />
        </LeftCol>
        <Col col />
        <RightCol auto>
          <SnsIcon />
        </RightCol>
      </Row>
    </Inner>
  </Wrap>
);

export default GNB;
