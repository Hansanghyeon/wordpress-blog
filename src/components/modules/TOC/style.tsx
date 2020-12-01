import styled from 'styled-components';
import { rhythm } from '@style/typography';

export const TOCView = styled.div`
  --margin: 45px;
  position: sticky;
  top: calc(var(--margin) + ${rhythm(1 / 2)});
  opacity: 1;
  height: 0px;
`;
export const TOCWrap = styled.div`
  position: absolute;
  left: calc(100% + ${rhythm(1)});
  width: calc(50vw - 50% - ${rhythm(1)});
  padding: ${rhythm(1 / 2)};
  a {
    cursor: pointer;
    text-decoration: none;
  }
`;
export const Level1 = styled.a`
  display: block;
  word-break: keep-all;
`;
export const Level2 = styled.a`
  display: block;
  padding-left: 1.4rem;
`;
export const Level3 = styled.a`
  display: block;
  padding-left: 2.8rem;
`;
