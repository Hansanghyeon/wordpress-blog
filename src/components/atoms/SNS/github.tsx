import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const LinkWrap = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.theme.darkMode ? '#fff' : '#000')};
`;

const Github = () => (
  <LinkWrap to="https://github.com/Hansanghyeon">
    <FontAwesomeIcon icon={faGithub} />
  </LinkWrap>
);

export default Github;
