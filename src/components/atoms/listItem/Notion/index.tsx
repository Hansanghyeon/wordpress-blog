import React from 'react';
import { Wrap, ImgWrap } from './style';

type NotionStyleListItemProps = {
  imgSrc?: string;
  children: React.ReactNode;
};

const NotionListItem: React.FC<NotionStyleListItemProps> = ({
  imgSrc,
  children,
}: NotionStyleListItemProps) => (
  <Wrap>
    <ImgWrap>
      <img
        src={
          imgSrc ||
          `${process.env.FILE_SERVER}/4log/icons/page-facing-up_1f4c4.png`
        }
        alt=""
      />
    </ImgWrap>
    <div>
      <span>{children}</span>
    </div>
  </Wrap>
);
NotionListItem.defaultProps = { imgSrc: undefined };

export default NotionListItem;
