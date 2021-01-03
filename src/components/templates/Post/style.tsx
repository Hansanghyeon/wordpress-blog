import styled from 'styled-components';
import { rhythm } from '@style/typography';
import { Container, Row as _Row, Col, media } from 'styled-bootstrap-grid';

export const CardWrap = styled.div`
  background: ${({ theme }) => theme.colors.bg[0]};
  border-radius: 3px;
  padding: ${rhythm(1 / 2)};
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  ${media.md`
    padding: ${rhythm(1)};
  `}
  *:first-child {
    margin-top: 0 !important;
  }
  img {
    height: auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    scroll-margin: 60px;
  }
  table {
    td,
    th {
      border: 1px solid ${({ theme }) => theme.colors.bg[1]};
      padding: 8px;
    }
    th {
      text-align: left;
      padding: 8px;
      word-break: keep-all;
    }
    tr:first-child th,
    tr:first-child td {
      border-top: 0;
    }
    tr th:first-child,
    tr td:first-child {
      border-left: 0;
    }
    tr:last-child th,
    tr:last-child td {
      border-bottom: 0;
    }
    tr th:last-child,
    tr td:last-child {
      border-right: 0;
    }
  }
`;

export const FeaturedImg = styled(Col)<{ bgImg?: string }>`
  background-image: url(${({ bgImg }) => bgImg});
  background-size: cover;
  background-position: center;
  padding-top: 54%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: ${({ theme }) => theme.colors.bg[0]};
  ${media.lg`
    padding-top: calc(54% / 2);
  `}
`;

export const StyledContainer = styled(Container)`
  margin-bottom: ${rhythm(2)};
`;

export const PostData = styled(Col)`
  padding-top: ${rhythm(1 / 2)};
  padding-bottom: ${rhythm(1 / 2)};
  margin-top: ${rhythm(1)};
  order: 2;
  ${media.lg`
    order: 0;
    justify-content: flex-end;
    flex-direction: column;
    display: flex;
  `}
`;

export const EtcWrap = styled.div`
  display: flex;
  margin-top: ${rhythm(1 / 2)};
`;

/**
 * @Row
 * */
const MainRow = styled(_Row)`
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(1)};
  .fc-dim,
  .fc-dim * {
    color: ${({ theme }) => theme.colors.text[3]};
  }
  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.bg[1]};
    padding-left: 18px;
  }
  .fc-highlight {
    color: ${({ theme }) => theme.colors.primary};
  }
  .how-block {
    margin-top: 0;
  }
  hr {
    border-bottom-color: ${({ theme }) => theme.colors.text[3]};
  }
  > ${Col} {
    position: unset;
  }
  a {
    font-size: 0.9em;
    text-decoration-line: underline;
    transition: color 0.3s;
    will-change: color;
    &:visited {
      color: ${({ theme }) => theme.colors.text[3]};
    }
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
const BioRow = styled(_Row)`
  padding: 0 ${rhythm(1)};
  margin-bottom: ${rhythm(1)};
`;
const CommentsRow = styled(_Row)`
  margin-bottom: ${rhythm(2)};
`;
const FeaturedImgRow = styled(_Row)`
  margin-left: 0;
  margin-right: 0;
  overflow: hidden;
`;

export const Row = {
  Main: MainRow,
  Bio: BioRow,
  FeaturedImg: FeaturedImgRow,
  Comment: CommentsRow,
};
