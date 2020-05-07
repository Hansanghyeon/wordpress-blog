import styled from 'styled-components';
// Utils
import respondTo from '@style/_respondTo';
import { rhythm } from '@style/typography';

const PostTitleText = styled.h1`
  font-size: ${rhythm(1)};
  line-height: 1.4;
  ${respondTo.md`
    font-size: ${rhythm(1.2)};
  `}
`;

export default PostTitleText;
