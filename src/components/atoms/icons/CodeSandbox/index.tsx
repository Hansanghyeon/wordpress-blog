import styled from 'styled-components';
import { FiCodesandbox } from 'react-icons/fi';

const A = styled.a`
  color: ${({ theme }) => theme.color.text[0]};
`;

const CodeSandbox = () => (
  <A href="https://codesandbox.io/u/Hansanghyeon">
    <FiCodesandbox />
  </A>
);

export default CodeSandbox;
