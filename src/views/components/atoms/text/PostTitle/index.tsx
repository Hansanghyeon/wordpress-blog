import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
// Utils
import { rhythm } from '@style/typography';

const PostTitleText = styled.h1`
  font-size: ${rhythm(1)};
  line-height: 1.4;
  ${media.md`
    font-size: ${rhythm(1.2)};
  `}
`;

export default PostTitleText;
