import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Container, Col, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import { rhythm } from '@utile/typography';
import SnsIcon from '@molecule/SNS';

const Profile = styled(Image)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: 80;
  border-radius: 100%;
`;

const Wrap = styled(Container)`
  font-size: 0.9rem;
  word-break: keep-all;
`;

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <Wrap>
      <Row>
        <Profile
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          imgStyle={{
            borderRadius: '50%',
          }}
        />
        <Col col>
          <p>
            Written by&nbsp;
            <strong>{author}</strong>
          </p>
          <p>
            웹의 자유로운 접근성에 매력을 느껴 현재 워드프레스, Front-end
            분야에서 일을 하고있습니다.&nbsp; 프로그래밍 언어, 소프트웨어,
            커뮤니티에 관심이 많습니다.
            <br />
            Happy hacking&nbsp;
            <span role="img" aria-label="fire">
              🔥
            </span>
          </p>
          <SnsIcon />
        </Col>
      </Row>
    </Wrap>
  );
};

export default Bio;
