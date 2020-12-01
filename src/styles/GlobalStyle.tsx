import { css, createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';

const _GlobalStyle = css`
  body {
    background-color: ${({ theme }) => theme.color.bg[1]};
    color: ${({ theme }) => theme.color.text[0]};
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.text[0]};
      &:hover,
      &.active {
        color: ${({ theme }) => theme.color.primary};
        > *:first-child {
          --color: ${({ theme }) => theme.color.primary};
        }
      }
    }
  }
  .tl-wrapper--unmount {
    box-shadow: inset rgba(0, 0, 0, 0.13) 0px 0px 100px 10px !important;
  }
  #gatsby-focus-wrapper {
    --gnb-height: 45px;
    margin-top: var(--gnb-height);
  }
  * {
    box-sizing: border-box;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em 0.3em;
    border-radius: 0.3em;
    font-family: 'Fira Code', monospace;
    color: ${({ theme }) => rgba(theme.code.color, 0.6)};
    background-color: ${({ theme }) => theme.code.bg};
    transition: color 0.3s;
    will-change: color;
    &:hover {
      color: ${({ theme }) => theme.code.color};
    }
  }
  pre * {
    font-family: 'Fira Code', monospace;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${_GlobalStyle};
`;

export default GlobalStyle;
