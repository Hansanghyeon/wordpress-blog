import React from 'react';
import styled from 'styled-components';
import { GridThemeProvider, Container, Row, Col } from 'styled-bootstrap-grid';
import Grid from '@style/Grid';
import Bio from '@view/components/bio';
import { rhythm } from '@style/typography';
import moment from 'moment';
// Utils
import respondTo from '@style/_respondTo';
// components
import CCBox from '@atom/icons/CCBox';
import PostTitleText from '@atom/text/PostTitle';
import Utterance from '#/Utterances';

const CardWrap = styled.div`
  background: ${({ theme }) => theme.color.bg[0]};
  border-radius: 3px;
  padding: ${rhythm(1 / 2)};
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  ${respondTo.md`
    padding: ${rhythm(1)};
  `};
`;

const CommentsRow = styled(Row)`
  margin-bottom: ${rhythm(2)};
`;

const FeaturedImgRow = styled(Row)`
  margin-left: 0;
  margin-right: 0;
  overflow: hidden;
`;

interface bgImg {
  bgImg?: string;
}
const FeaturedImg = styled(Col)<bgImg>`
  background-image: url(${({ bgImg }) => bgImg});
  background-size: cover;
  background-position: center;
  padding-top: 54%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: ${({ theme }) => theme.color.bg[0]};
  ${respondTo.lg`
    padding-top: calc(54% /2);
  `}
`;

const StyledRow = styled(Row)`
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(1)};
  .fc-dim,
  .fc-dim * {
    color: ${({ theme }) => theme.color.text[3]};
  }
  blockquote {
    border-left: 4px solid ${({ theme }) => theme.color.bg[1]};
  }
  .fc-highlight {
    color: ${({ theme }) => theme.color.primary};
  }
  .how-block {
    margin-top: 0;
  }
  hr {
    border-bottom-color: ${({ theme }) => theme.color.text[3]};
  }
  > ${Col} {
    position: unset;
  }
`;

const BioRow = styled(StyledRow)`
  padding: 0 ${rhythm(1)};
`;

const StyledContainer = styled(Container)`
  margin-bottom: ${rhythm(2)};
`;

const PostData = styled(Col)`
  padding-top: ${rhythm(1 / 2)};
  padding-bottom: ${rhythm(1 / 2)};
  margin-top: ${rhythm(1)};
  order: 2;
  ${respondTo.lg`
    order: 0;
    justify-content: flex-end;
    flex-direction: column;
    display: flex;
  `}
`;

const EtcWrap = styled.div`
  display: flex;
  margin-top: ${rhythm(1 / 2)};
`;

interface header {
  title: string;
  date: string;
}
interface props {
  children: React.ReactNode;
  imgSrc?: string;
  header: header;
}

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
          <FeaturedImgRow>
            <PostData col={12} lg={imgSrc ? 6 : 12}>
              <PostTitleText>{header.title}</PostTitleText>
              <span>{moment(header.date).format('YYYY년 MM월 DD일')}</span>
              <EtcWrap>
                <CCBox />
              </EtcWrap>
            </PostData>
            {imgSrc && <FeaturedImg col={12} lg={6} bgImg={imgSrc} />}
          </FeaturedImgRow>
          <StyledRow>
            <Col col>
              <CardWrap className="prism-previewer">{children}</CardWrap>
            </Col>
          </StyledRow>
          <BioRow>
            <Col col>
              <Bio />
            </Col>
          </BioRow>
          {process.env.NODE_ENV === 'production' && (
            <CommentsRow>
              <Col col>
                <Utterance />
              </Col>
            </CommentsRow>
          )}
        </StyledContainer>
      </GridThemeProvider>
    </>
  );
};

export default PostTemplate;
