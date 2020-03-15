import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 16px auto;
  grid-template-rows: 16px;
  align-items: center;
  column-gap: 4px;
  font-size: 14px;
  height: 16px;
  color: ${({ theme }) => theme.color.text[1]};
  margin-bottom: 4px;
`;
const ImgWrap = styled.div`
  width: 16px;
  height: 100%;
  overflow: hidden;
  border-radius: 3px;
  font-size: 0;
  img {
    width: 100%;
    margin-bottom: 0;
  }
`;

interface Props {
  imgSrc?: string;
  children: React.ReactNode;
}

const NotionStyleList = ({ imgSrc, children }: Props) => (
  <Wrap>
    <ImgWrap>
      {imgSrc ? (
        <img src={imgSrc} alt="" />
      ) : (
        <span role="img" aria-label="page">
          📄
        </span>
      )}
    </ImgWrap>
    <span>{children}</span>
  </Wrap>
);

export default NotionStyleList;
