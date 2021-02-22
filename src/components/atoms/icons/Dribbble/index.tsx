import { FaDribbble } from 'react-icons/fa';
import styled from 'styled-components';

const LinkWrap = styled.a`
  text-decoration: none;
  color: #ea4c89;
  line-height: 1;
`;

const Dribbble = () => (
  <LinkWrap href="https://dribbble.com/Hansanghyeon">
    <FaDribbble />
  </LinkWrap>
);

export default Dribbble;
