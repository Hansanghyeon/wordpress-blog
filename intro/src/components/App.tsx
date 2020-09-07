import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 56px;
  font-weight: bold;
  text-align: center;
`;
const StyledContainer = styled(Container)`
  padding-top: 100px;
  ${Row} {
    margin-bottom: 48px;
  }
`;
const ImgWrap = styled.div`
  position: relative;
  padding-top: 56.26%;
  img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const LinkFa = styled(FontAwesomeIcon)`
  transition: color 0.3s ease-in-out;
  will-change: color;
  color: white;
  &:hover {
    color: #0f4c81;
  }
`;
const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  will-change: opacity;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  display: grid;
  place-content: center;
  color: white;
  &:hover {
    opacity: 1;
  }
`;

const PageHeaderRow = styled(Row)`
  margin-bottom: 48px;
`;

export default () => {
  return (
    <StyledContainer>
      <PageHeaderRow>
        <Col col>
          <StyledH1>hapas. Content Manage System</StyledH1>
        </Col>
      </PageHeaderRow>
      <Row>
        <Col col>use case</Col>
      </Row>
      <Row>
        <Col col>
          <ImgWrap>
            <img
              src={
                process.env.PUBLIC_URL +
                '/wp-content/uploads/4log/reactsrc/images/4log.png'
              }
              alt=""
            />
            <HoverOverlay>
              <a href="https://4log.hapas.io">
                <LinkFa icon={faLink} size="6x" />
              </a>
            </HoverOverlay>
          </ImgWrap>
        </Col>
      </Row>
    </StyledContainer>
  );
};
