import React, { useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { TimelineLite, Power1 } from 'gsap';
import {
  DittoRoot,
  Main,
  Body,
  Title,
  Footer,
  Thumnail,
  MainInner,
  Content,
  Date,
  CategoryLabel,
} from './style';

interface DittoProps {
  excerpt: string;
  date: number;
  footer: () => React.ReactNode;
  imgSrc?: string;
  title: () => React.ReactNode;
  isGrid: boolean;
}
const Ditto: React.FC<DittoProps> = ({
  imgSrc,
  excerpt,
  date,
  footer,
  title,
  isGrid,
}: DittoProps) => {
  const MainInnerRef = useRef<HTMLDivElement>(null);
  const _excerpt = () => {
    if (excerpt.length < 118) return excerpt;
    return `${excerpt.substring(0, 110)}...`;
  };
  useEffect(() => {
    const tl = new TimelineLite();
    if (isGrid) {
      tl.to(MainInnerRef.current, 0.05, {
        marginLeft: '0',
      }).to(MainInnerRef.current, 0.2, {
        marginTop: '54%',
        ease: Power1.easeOut,
      });
    } else {
      tl.to(MainInnerRef.current, 0.25, {
        style: null,
      });
    }
  });
  return (
    <DittoRoot>
      <Main isGrid={isGrid} isThumnail={!!imgSrc}>
        <Thumnail imgSrc={imgSrc} isGrid={isGrid} isThumnail={!!imgSrc} />
        <MainInner ref={MainInnerRef} isGrid={isGrid} isThumnail={!!imgSrc}>
          <Body isGrid={isGrid} isThumnail={!!imgSrc}>
            <Title isThumnail={!!imgSrc}>{title()}</Title>
            <Content isThumnail={!!imgSrc}>{_excerpt()}</Content>
          </Body>
          <Footer>
            <CategoryLabel>{footer()}</CategoryLabel>
            <Date>{dayjs(date).format('YYYY.M.D')}</Date>
          </Footer>
        </MainInner>
      </Main>
    </DittoRoot>
  );
};
Ditto.defaultProps = {
  imgSrc: '',
};

export default Ditto;
