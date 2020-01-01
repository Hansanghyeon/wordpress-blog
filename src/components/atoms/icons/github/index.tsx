import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { darkModeType } from '@src/utils/interface';
import useDarkMode from 'use-dark-mode';
import { useStaticQuery, graphql } from 'gatsby';

const LinkWrap = styled.a<darkModeType>`
  text-decoration: none;
  color: ${(props) => (props.darkMode ? '#fff' : '#000')};
`;

const Github = () => {
  const darkMode = useDarkMode();
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
    <LinkWrap href={`https://github.com/${social.github}`} darkMode={darkMode.value}>
      <FontAwesomeIcon icon={faGithub} />
    </LinkWrap>
  );
};

export default Github;
