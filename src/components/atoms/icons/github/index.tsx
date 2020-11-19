import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';

const LinkWrap = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.text[0]};
  display: flex;
  align-items: center;
`;

const Github: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            github
          }
        }
      }
    }
  `);
  const { social } = data.site.siteMetadata;

  return (
    <LinkWrap href={`https://github.com/${social.github}`}>
      <FaGithub />
    </LinkWrap>
  );
};

export default Github;
