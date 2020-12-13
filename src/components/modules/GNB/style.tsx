import styled from 'styled-components';
import {
  Container as _Container,
  Row as _Row,
  Col as _Col,
  media,
} from 'styled-bootstrap-grid';
// style utile
import { rhythm } from '@style/typography';
// Component
import { SidebarStatueType, SidebarStatueStyle } from '@module/MSB/style';

export const Wrap = styled.div<SidebarStatueType>`
  width: 100%;
  height: 45px;
  overflow: hidden;
  padding: 0 ${rhythm(1 / 2)};
  background: ${({ theme }) => theme.colors.bg[0]};
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  ${({ sidebarOpen }) => sidebarOpen && SidebarStatueStyle.Open};
  ${SidebarStatueStyle.Def};
`;

const Col = _Col as typeof _Col & {
  Right: typeof _Col;
  Left: typeof _Col;
  Menu: typeof _Col;
};
Col.Right = styled(_Col)`
  display: flex;
  justify-content: flex-end;
`;
Col.Left = styled(_Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: auto;
  }
`;
Col.Menu = styled(_Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.md`
    display: none;
  `}
`;

const Row = _Row as typeof _Row & {};

const Container = _Container as typeof _Container & {
  Inner: typeof _Container;
};
Container.Inner = styled(_Container)`
  height: 100%;
  > ${_Row} {
    height: 100%;
    > ${_Col} {
      height: 100%;
    }
  }
`;

export { Col, Row, Container };
