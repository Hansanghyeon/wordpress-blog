import { css, createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';

const _GlobalStyle = css`
  body {
    background-color: ${({ theme }) => theme.colors.bg[1]};
    color: ${({ theme }) => theme.colors.text[0]};
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text[0]};
      &:hover,
      &.active {
        color: ${({ theme }) => theme.colors.primary};
        > *:first-child {
          --color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
  * {
    box-sizing: border-box;

    &::-webkit-scrollbar {
      background-color: transparent;
      width: 4px;
      height: 4px;
    }
    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => rgba(theme.colors.bg[1], 0.6)};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => rgba(theme.colors.text[0], 0.6)};
      border-radius: 999px;
    }
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em 0.3em;
    border-radius: 0.3em;
    font-family: 'Fira Code', monospace;
    color: ${({ theme }) => theme.colors.codeColor};
    background-color: ${({ theme }) => theme.colors.codeBg};
  }
  pre {
    color: ${({ theme }) => theme.colors.codeColor};
    background-color: ${({ theme }) => theme.colors.codeBg} !important;
    code {
      color: ${({ theme }) => theme.colors.codeColor};
      background-color: ${({ theme }) => theme.colors.codeBg} !important;
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
