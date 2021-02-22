import React, { useState } from 'react';
// Components
import Grid from '@style/Grid';
import Profile from './Profile';
import Career from './Career';
import Alert from '@atom/Alert';
import DimSpan from '@atom/DimSpan';
import Introduce from './Introduce';
import { Container, Row, Col } from './style';

const _Grid = {
  ...Grid,
  container: {
    maxWidth: {
      xxl: 768,
      xl: 768,
      lg: 768,
    },
  },
};

const Resume: React.FC = () => {
  const [notice, setNotice] = useState(true);
  const handleNotice = () => {
    setNotice(false);
  };
  return (
    <Container>
      <Row.Header />
      {notice && (
        <>
          <Row>
            <Col col>
              <Alert onClick={handleNotice}>
                리메이크되거나 제거된 홈페이지 기제하지 않았습니다.{' '}
                <DimSpan
                  style={{ fontSize: '0.6rem', display: 'inline-block' }}
                >
                  (2020-09-16)
                </DimSpan>
              </Alert>
            </Col>
          </Row>
          <Row.Header />
        </>
      )}
      <Row>
        <Col col>
          <Profile />
        </Col>
      </Row>
      <Row>
        <Col col>
          <Introduce />
        </Col>
      </Row>
      <Row>
        <Col col>
          <Career />
        </Col>
      </Row>
      <Row.Footer />
    </Container>
  );
};

export default Resume;
