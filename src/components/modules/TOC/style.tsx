import styled from 'styled-components';
import { rhythm } from '@style/typography';
import { rgba } from 'polished';

export const TOCView = styled.div<{ onModal: boolean }>`
  --margin: 45px;
  position: sticky;
  top: calc(var(--margin) + ${rhythm(1 / 2)});
  opacity: 1;
  height: 0px;
  visibility: ${({ onModal }) => onModal && 'hidden'};
`;
export const TOCWrap = styled.div`
  position: absolute;
  left: calc(100% + ${rhythm(1)});
  width: calc(50vw - 50% - ${rhythm(2)});
  padding: 0 ${rhythm(1.5)};
`;
const LevelLink = styled.a`
  cursor: pointer;
  text-decoration: none !important;
`;
export const Level1 = styled(LevelLink)`
  display: block;
  word-break: keep-all;
`;
export const Level2 = styled(LevelLink)`
  display: block;
  padding-left: 1.4rem;
`;
export const Level3 = styled(LevelLink)`
  display: block;
  padding-left: 2.8rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  img {
    width: 24px;
    margin: 0;
    margin-right: 8px;
  }
`;

export const List = styled.div``;

// Modal
export const TocModal = styled.div<{ onModal: boolean }>`
  position: fixed;
  bottom: 45px;
  right: 20px;
  transform: translate3d(0, 0, 0);
  display: ${({ onModal }) => (onModal ? 'block' : 'none')};
`;

export const TocModalListWrap = styled.div<{ toggle: boolean }>`
  position: absolute;
  bottom: 64px;
  width: 320px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.bg[0]};
  box-shadow: 0px 0px 5px 1px
    ${({ theme }) => rgba(theme.colors.grayscalesDark[0], 0.2)};
  ${Title} {
    padding: 8px 12px;
    margin-bottom: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text[2]};
  }
  ${List} {
    padding: 8px 12px 12px;
  }

  // animation
  transition: right 0.6s;
  will-change: right;
  right: ${({ toggle }) => (toggle ? '0' : '-999px')};
`;

const ToggleBtn = styled.button`
  display: flex;
  padding: 0;
  border: none;
  background-color: transparent;
  width: 50px;
  position: absolute;
  bottom: 0;
  right: 0;
  outline: none;
  cursor: pointer;
  img {
    margin: 0;
  }
`;
ToggleBtn.defaultProps = {
  type: 'button',
};

export { ToggleBtn };
