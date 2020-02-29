import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';

const LinkWrap = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color};
  display: flex;
  align-items: center;
`;

const Github = () => {
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
      <FontAwesomeIcon icon={faGithub} />
    </LinkWrap>
  );
};

export default Github;
