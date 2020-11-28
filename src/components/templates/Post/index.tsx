import React from 'react';
import { GridThemeProvider, Col } from 'styled-bootstrap-grid';
import dayjs from 'dayjs';
// components
import CCBox from '@atom/icons/CCBox';
import PostTitleText from '@atom/text/PostTitle';
import Utterance from '@atom/Utterances';
import SectionSeparator from '@/section-separator';
import MoreStories from '@module/list/MoreStories';
import Author from '@atom/block/Author';
// import Bio from '@view/components/bio';
// style
import Grid from '@style/Grid';
import {
  CardWrap,
  FeaturedImg,
  StyledContainer,
  PostData,
  EtcWrap,
  Row,
} from './style';

type props = {
  children: React.ReactNode;
  post: any;
  morePosts: [];
};

export default function PostTemplate({ children, morePosts, post }: props) {
  const _Grid = {
    ...Grid,
    container: {
      maxWidth: {
        xl: 800,
      },
    },
  };
  const { title, date, featuredImage } = post;
  return (
    <>
      <GridThemeProvider gridTheme={_Grid}>
        <article>
          <StyledContainer>
            <Row.FeaturedImg>
              <PostData col={12} lg={featuredImage?.node.mediaItemUrl ? 6 : 12}>
                <PostTitleText>{title}</PostTitleText>
                <span>{dayjs(date).format('YYYY년 MM월 DD일')}</span>
                <EtcWrap>
                  <a
                    href="https://creativecommons.org/licenses/by-nc-sa/2.0/kr/"
                    target="_blank"
                  >
                    <CCBox />
                  </a>
                </EtcWrap>
              </PostData>
              {featuredImage?.node.mediaItemUrl && (
                <FeaturedImg
                  col={12}
                  lg={6}
                  bgImg={featuredImage?.node.mediaItemUrl}
                />
              )}
            </Row.FeaturedImg>
            <Row.Main>
              <Col col>
                <CardWrap className="prism-previewer">{children}</CardWrap>
              </Col>
            </Row.Main>
            <Row.Bio>
              <Col col>
                <Author author={post.author.node} />
              </Col>
            </Row.Bio>
            {process.env.NODE_ENV === 'production' && (
              <Row.Comment>
                <Col col>
                  <Utterance />
                </Col>
              </Row.Comment>
            )}
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </StyledContainer>
        </article>
      </GridThemeProvider>
    </>
  );
}
