import { css, createGlobalStyle } from 'styled-components';
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
`;

const GlobalStyle = createGlobalStyle`
  ${_GlobalStyle};
`;

export default GlobalStyle;
