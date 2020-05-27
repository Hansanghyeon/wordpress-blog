import React from 'react';
import { GridThemeProvider, Col } from 'styled-bootstrap-grid';
import Grid from '@style/Grid';
import Bio from '@view/components/bio';
import moment from 'moment';
// Utils
// components
import CCBox from '@atom/icons/CCBox';
import PostTitleText from '@atom/text/PostTitle';
import Utterance from '#/Utterances';
import {
  CardWrap,
  FeaturedImg,
  StyledContainer,
  PostData,
  EtcWrap,
  Row,
} from './index.style';

type props = {
  children: React.ReactNode;
  imgSrc?: string;
  header: {
    title: string;
    date: string;
  };
};

const PostTemplate = ({ children, imgSrc, header }: props) => {
  const _Grid = {
    ...Grid,
    container: {
      maxWidth: {
        xl: 960,
      },
    },
  };
  return (
    <>
      <GridThemeProvider gridTheme={_Grid}>
        <StyledContainer>
          <Row.FeaturedImg>
            <PostData col={12} lg={imgSrc ? 6 : 12}>
              <PostTitleText>{header.title}</PostTitleText>
              <span>{moment(header.date).format('YYYY년 MM월 DD일')}</span>
              <EtcWrap>
                <CCBox />
              </EtcWrap>
            </PostData>
            {imgSrc && <FeaturedImg col={12} lg={6} bgImg={imgSrc} />}
          </Row.FeaturedImg>
          <Row.Main>
            <Col col>
              <CardWrap className="prism-previewer">{children}</CardWrap>
            </Col>
          </Row.Main>
          <Row.Bio>
            <Col col>
              <Bio />
            </Col>
          </Row.Bio>
          {process.env.NODE_ENV === 'production' && (
            <Row.Comment>
              <Col col>
                <Utterance />
              </Col>
            </Row.Comment>
          )}
        </StyledContainer>
      </GridThemeProvider>
    </>
  );
};

export default PostTemplate;
