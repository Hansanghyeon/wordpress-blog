import styled from 'styled-components';
import { Row as _Row, Col as _Col, media } from 'styled-bootstrap-grid';

export const Header = styled.div`
  background-color: ${({ theme }) => theme.palette.bg[0]};

  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 10px;
  position: absolute;
  top: 2px;
  left: 0;
  border-radius: 2px;
  padding-right: 2px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.45s;
  will-change: background-color, color;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
`;
export const Favicon = styled.div`
  border-radius: 2px;
  overflow: hidden;
  line-height: 0;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  img {
    width: 100%;
  }
`;
export const Url = styled.div`
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Description = styled.div`
  margin-bottom: 4px;
  ${media.md`
    max-height: 3.8rem;
    overflow: hidden;
  `};
`;

const Col = _Col as typeof _Col & {
  Image: typeof _Col;
  Content: typeof _Col;
};
Col.Image = styled(_Col)`
  position: relative;
  display: none;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${media.sm`
    display: block;
  `};
`;
Col.Content = styled(_Col)`
  overflow: hidden;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 12px;
  ${media.md`
    height: 120px;
  `};
`;

const BodyBase = styled.div`
  background-color: ${({ theme }) => theme.palette.bg[1]};
  color: ${({ theme }) => theme.palette.text[2]};
  font-size: 14px;
  border-radius: 4px;
  box-shadow: inset 0 0 5px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.45s;
  will-change: box-shadow, color, border;
  box-sizing: border-box;
  border: 1px solid transparent;
  display: flex;
`;
const Body = BodyBase as typeof BodyBase & {
  Loading: any;
};
Body.Loading = styled(Body)`
  display: flex;
  justify-content: center;
  > div {
    max-width: 180px;
  }
`;
export { Body };

export const RootWrap = styled.div`
  display: block;
  color: inherit;
  text-decoration: none;
  padding: 16px 0;
  position: relative;
  text-decoration: none !important;
  &:hover {
    box-shadow: inset 0 0 5px 1px rgba(0, 0, 0, 0);
  }

  &:hover {
    ${Header} {
      background-color: ${({ theme }) => theme.palette.primary};
      color: ${({ theme }) => theme.palette.bg[1]};
    }
    ${Body} {
      color: ${({ theme }) => theme.palette.text[1]};
      border: 1px solid ${({ theme }) => theme.palette.text[2]};
    }
  }
`;

export { Col };
