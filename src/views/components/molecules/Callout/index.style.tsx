import styled from 'styled-components';
import { darken, transparentize } from 'polished';
import { Container, Row as _Row, Col as _Col } from 'styled-bootstrap-grid';
//
import { rhythm } from '@style/typography';
import { ThemeStateType } from '@store/rootStore';

interface props extends ThemeStateType {
  bgColor: string;
}
// "Callout은 MDX에서 사용하기때문에 렌더링할때 props에서 theme 값을 가져올 수 없다."
export const Wrap = styled(Container)<props>`
  background-color: ${({ bgColor, isDark, theme }) => {
    let _color;
    if (bgColor !== '') {
      _color = isDark ? transparentize(0.4, darken(0.2, bgColor)) : bgColor;
    } else {
      [, _color] = theme.color.bg;
    }
    return _color;
  }};
  padding: ${rhythm(1 / 2)};
  margin-bottom: ${rhythm(1)};
  border-radius: 4px;
  word-break: keep-all;
  box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
`;

export const Col = {
  Text: styled(_Col)`
    display: flex;
    align-items: center;
  `,
};
export const Row = {
  Def: styled(_Row)`
    margin: 0;
  `,
};

export const Emoji = styled.span`
  transform: scale(1.4);
`;
