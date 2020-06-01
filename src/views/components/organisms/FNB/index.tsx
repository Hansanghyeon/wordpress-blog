import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { rhythm } from '@style/typography';

import Link from '@atom/Link';

const Footer = styled(Container)`
  padding-top: ${rhythm(1)};
  padding-bottom: ${rhythm(1)};
  font-size: 0.8rem;
  background-color: ${({ theme }) => theme.color.bg[0]};
  color: ${({ theme }) => theme.color.text[0]};
`;

const CopyrightCol = styled(Col)`
  text-align: center;
`;

const FNB = () => (
  <Footer fluid>
    <Container>
      <Row>
        <CopyrightCol col>
          <Link href="https://github.com/Hansanghyeon/4log/blob/master/LICENSE">
            Copyright (c) 2020 999hyeon
          </Link>
        </CopyrightCol>
      </Row>
    </Container>
  </Footer>
);

export default FNB;
