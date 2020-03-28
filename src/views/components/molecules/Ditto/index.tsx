import React, { useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { transparentize } from 'polished';
import { TimelineLite, Power1 } from 'gsap';
import './index.style.scss';

interface StyledProps {
  imgSrc?: string;
}
const DittoRoot = styled.div``;
const Main = styled.div``;
const Body = styled.div``;
const Title = styled.div``;
const Footer = styled.div``;
const Thumnail = styled.div<StyledProps>`
  background-image: url(${({ imgSrc }) => imgSrc});
  background-color: ${({ theme }) =>
    transparentize(0.75, theme.color.grayscales.dark[4])};
`;
const MainInner = styled.div`
  background-color: ${({ theme }) => theme.color.bg[0]};
`;
const Content = styled.div`
  color: ${({ theme }) => theme.color.text[1]};
`;
const Date = styled.div`
  color: ${({ theme }) => theme.color.text[2]};
`;
const CategoryLabel = styled.div`
  background-color: ${({ theme }) => theme.color.bg[1]};
`;

interface DittoProps {
  excerpt: string;
  date: number;
  footer: any;
  imgSrc?: string;
  title: string;
  isGrid: boolean;
}
const Ditto = ({
  imgSrc,
  excerpt,
  date,
  footer,
  title,
  isGrid,
}: DittoProps) => {
  const _excerpt = () => {
    if (excerpt.length < 118) return excerpt;
    return `${excerpt.substring(0, 110)}...`;
  };
  useEffect(() => {
    const tl = new TimelineLite();
    if (isGrid) {
      tl.to(['._mainInner'], 0.05, {
        marginLeft: '0',
      }).to(['._mainInner'], 0.2, {
        marginTop: '54%',
        ease: Power1.easeOut,
      });
    } else {
      tl.to(['._mainInner'], 0.25, {
        style: null,
      });
    }
  });
  return (
    <DittoRoot
      className={`ditto ditto-root ditto-${isGrid ? 'grid' : 'list'} ${
        imgSrc ? '' : 'non-thumbnail'
      }`}
    >
      <Main className="_main">
        <Thumnail className="_thumnail" imgSrc={imgSrc} />
        <MainInner className="_mainInner">
          <Body className="_body">
            <Title className="_title">{title}</Title>
            <Content className="_content">{_excerpt()}</Content>
          </Body>
          <Footer className="_footer">
            <CategoryLabel className="_cat">{footer()}</CategoryLabel>
            <Date className="_date">{moment(date).format('YYYY.M.D')}</Date>
          </Footer>
        </MainInner>
      </Main>
    </DittoRoot>
  );
};

export default Ditto;
