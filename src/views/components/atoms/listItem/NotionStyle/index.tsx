import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 16px auto;
  column-gap: 8px;
  font-family: 'Fira Sans', sans-serif;
  > div {
    align-self: center;
  }
`;
const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 3px;
  img {
    width: 100%;
    margin-bottom: 0;
  }
`;

interface Props {
  data: { imgSrc?: string };
  children: React.ReactNode;
}

const NotionStyleListItem = ({ data, children }: Props) => {
  const { imgSrc } = data;
  return (
    <Wrap>
      <ImgWrap>
        <img
          src={
            imgSrc ||
            'https://wp.hapas.io/wp-content/uploads/4log/icons/page-facing-up_1f4c4.png'
          }
          alt=""
        />
      </ImgWrap>
      <div>
        <span className="cat-text">{children}</span>
      </div>
    </Wrap>
  );
};

export default NotionStyleListItem;
