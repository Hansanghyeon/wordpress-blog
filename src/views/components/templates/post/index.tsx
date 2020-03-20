import React from 'react';
import styled from 'styled-components';
import { GridThemeProvider, Container, Row, Col } from 'styled-bootstrap-grid';
import Grid from '@style/Grid';
import Bio from '@view/components/bio';
import Layout from '@template/layout';
import { rhythm } from '@style/typography';
// components
import Utterance from '@molecule/Utterances';

const CardWrap = styled.div`
  background: ${props => props.theme.color.bg[1]};
  border-radius: 3px;
  padding: ${rhythm(1)};
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
`;

const CommentsRow = styled(Row)`
  margin-bottom: ${rhythm(2)};
`;

const FeaturedImageWrap = styled.div`
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  overflow: hidden;
  font-size: 0;
  margin-bottom: ${rhythm(1)};
  img {
    margin-bottom: 0;
  }
`;

const StyledRow = styled(Row)`
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(1)};
`;

const BioRow = styled(StyledRow)`
  padding: 0 ${rhythm(1)};
`;

const StyledContainer = styled(Container)`
  margin-bottom: ${rhythm(2)};
`;

interface props {
  children: React.ReactNode;
  imgSrc?: string;
}

const PostTemplate = ({ children, imgSrc }: props) => {
  const _Grid = {
    ...Grid,
    container: {
      maxWidth: {
        xl: 960,
      },
    },
  };
  return (
    <Layout>
      <GridThemeProvider gridTheme={_Grid}>
        <StyledContainer>
          {imgSrc && (
            <Row>
              <Col col>
                <FeaturedImageWrap>
                  <img src={imgSrc} alt="" />
                </FeaturedImageWrap>
              </Col>
            </Row>
          )}
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
    </Layout>
  );
};

export default PostTemplate;
