import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { media } from 'styled-bootstrap-grid';

export const DittoRoot = styled.div`
  color: ${({ theme }) => theme.color.text[0]};

  padding: 1rem;
  min-height: 48px;
  position: relative;
  z-index: 0;
  transition: z-index 0.45s;
  will-change: z-index;
  &:hover {
    z-index: 200;
  }
`;

const BaseMain = styled.div`
  font-size: 16px;
  border-radius: 8px;
  box-shadow: 0 22px 24px -28px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.45s ease-in-out;
  will-change: box-shadow, transform;
  display: flex;
  position: relative;
  flex-wrap: wrap;
`;

const BaseThumnail = styled.div<{ imgSrc?: string }>`
  background-image: url(${({ imgSrc }) => imgSrc});
  background-color: ${({ theme }) => transparentize(0.75, theme.color.bg[0])};
  width: 80px;
  height: 100%;
  position: absolute;
  z-index: 100;
  transition: all 0.45s ease-in-out;
  will-change: width, background-color, margin-right, background-size, height,
    transform;
  border-radius: 8px;
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const BaseMainInner = styled.div`
  background-color: ${({ theme }) => theme.color.bg[0]};
  position: relative;
  z-index: 200;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  margin-left: calc(80px - 1rem);
  will-change: padding-left, z-index, transform, margin-left, box-shadow;
`;

const BaseBody = styled.div`
  padding: 0.5rem 1rem;
`;
export const Title = styled.div`
  margin-bottom: 8px;
  font-weight: bold;
`;
export const Footer = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  justify-content: space-between;
  align-items: center;
  > div {
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const BaseContent = styled.div`
  color: ${({ theme }) => theme.color.text[1]};

  max-width: 280px;
  height: 4rem;
  overflow: hidden;
  font-size: 0.875rem;
  transition: max-width 0.45s;
`;
export const Date = styled.div`
  color: ${({ theme }) => theme.color.text[2]};
  font-size: 0.75rem;
`;
export const CategoryLabel = styled.div`
  background-color: ${({ theme }) => theme.color.bg[1]};
  border-radius: 8px;
  padding: 0.25rem 8px;
`;

const List = {
  main: css`
    &:hover {
      box-shadow: none;
      ${BaseThumnail} {
        width: 120px;
        background-color: transparent;
        margin-right: 0;
        z-index: 200;
        box-shadow: 2px 0 22px -8px rgba(0, 0, 0, 0.4);
      }
      ${BaseMainInner} {
        padding-left: 1rem;
        z-index: 100;
        transform: scale(0.96) translate(calc(40px + 1rem));
        box-shadow: 0 22px 24px -28px rgba(0, 0, 0, 0.2);
        margin-left: calc(80px - 2rem);
      }
    }
  `,
};

const nonThumnail = {
  thumnail: css`
    display: none;
  `,
  mainInner: css`
    margin-left: 0 !important;
    margin-top: 0 !important;
    border-radius: 8px !important;
  `,
  main: css`
    &:hover {
      ${BaseMainInner} {
        transform: unset;
        padding-left: 0;
        margin-left: 0;
      }
    }
  `,
  content: css`
    max-width: 280px;
  `,
};
const Grid = {
  thumnail: css`
    width: 100%;
    height: 54%;
    transition: all 0.2s ease-in-out;
    transition-delay: 0.2s;
    background-color: transparent;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `,
  mainInner: css`
    box-shadow: 0 22px 24px -28px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  `,
  main: css`
    box-shadow: none;
    transition: transform 0.45s ease-in-out;
    border-radius: 8px;
    overflow: hidden;
    &:hover {
      transform: translateY(-8px);
      ${BaseThumnail} {
        transform: scale(1.05);
      }
      ${BaseMainInner} {
        box-shadow: 0 22px 48px -28px rgba(0, 0, 0, 0.2);
      }
    }
  `,
  body: css`
    padding: 1rem;
  `,
};

type IsThumnail = {
  isThumnail: boolean;
};
type IsGrid = {
  isGrid: boolean;
};

interface Props extends IsThumnail, IsGrid {}

export const Thumnail = styled(BaseThumnail)<Props>`
  ${({ isGrid }) => isGrid && Grid.thumnail}
  ${({ isThumnail }) => !isThumnail && nonThumnail.thumnail}
`;

export const MainInner = styled(BaseMainInner)<Props>`
  ${({ isGrid }) => isGrid && Grid.mainInner}
  ${({ isThumnail }) => !isThumnail && nonThumnail.mainInner}
`;

export const Main = styled(BaseMain)<Props>`
  ${({ isGrid }) => (isGrid ? Grid.main : List.main)}
  ${({ isThumnail }) => !isThumnail && nonThumnail.main}
`;

const nonThumnailAndNonGrid = css`
  ${media.sm`
    max-width: calc(280px + 80px - 1rem);
  `}
`;

export const Content = styled(BaseContent)<Props>`
  ${({ isThumnail }) => !isThumnail && nonThumnail.content}
  ${({ isThumnail, isGrid }) => !isThumnail && !isGrid && nonThumnailAndNonGrid}
`;

export const Body = styled(BaseBody)<Props>`
  ${({ isGrid, isThumnail }) => isGrid && isThumnail && Grid.body}
`;
