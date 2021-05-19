import styled from 'styled-components';
import { FiCodesandbox } from 'react-icons/fi';

const LinkWrap = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text[0]};
  line-height: 1;
`;

const CodeSandbox = () => (
  <LinkWrap href="https://codesandbox.io/u/Hansanghyeon">
    <FiCodesandbox />
  </LinkWrap>
);

export default CodeSandbox;
