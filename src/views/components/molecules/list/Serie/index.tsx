import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCaretUp,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import Link from '@atom/Link';
import {
  Img,
  Wrap,
  Header,
  Title,
  Footer,
  Controller,
  Body,
  Ol,
  Li,
  MoreBtn,
  ArrowBtn,
  CurrentLi,
} from './index.style';
import { SerieListType, accPostType } from './index.type';

const SerieList: React.FC<SerieListType> = ({ data }: SerieListType) => {
  const { query, currentPostId } = data;
  const [toggle, setToggle] = useState(true);
  const _handleClick = () => {
    setToggle(!toggle);
  };
  const prevNextPost = query.posts.edges.reduce(
    (acc: accPostType, cur, idx, arr) => {
      const { node } = cur;
      if (arr.length <= 1) return acc;
      if (node.id === currentPostId) {
        if (idx === 0) {
          acc.next = arr[idx + 1];
          return acc;
        }
        if (idx >= 1) {
          acc.prev = arr[idx - 1];
          acc.next = arr[idx + 1];
          return acc;
        }
      }
      return acc;
    },
    { prev: null, next: null },
  );
  return (
    <Wrap>
      <Header toggle={toggle}>
        <Title>{query.name}</Title>
        <Img
          src="https://wp.hapas.io/wp-content/uploads/4log/icons/book.svg"
          alt="Series"
        />
      </Header>
      <Body toggle={toggle}>
        <Ol>
          {query.posts.edges.map(({ node }) => {
            if (node.id === currentPostId) {
              return (
                <CurrentLi key={`${currentPostId}-${node.id}`}>
                  {node.title}
                </CurrentLi>
              );
            }
            return (
              <Li key={`${currentPostId}-${node.id}`}>
                <Link to={`/post/${node.slug}`}>{node.title}</Link>
              </Li>
            );
          })}
        </Ol>
      </Body>
      <Footer>
        <MoreBtn type="button" onClick={_handleClick}>
          <FontAwesomeIcon icon={toggle ? faCaretDown : faCaretUp} />
          <span>{toggle ? '목록보기' : '접기'}</span>
        </MoreBtn>
        <Controller>
          {prevNextPost.prev ? (
            <Link to={`/post/${prevNextPost.prev.node.slug}`}>
              <ArrowBtn type="button">
                <FontAwesomeIcon icon={faChevronLeft} />
              </ArrowBtn>
            </Link>
          ) : (
            <ArrowBtn type="button" disable>
              <FontAwesomeIcon icon={faChevronLeft} />
            </ArrowBtn>
          )}
          {prevNextPost.next ? (
            <Link to={`/post/${prevNextPost.next.node.slug}`} direction="left">
              <ArrowBtn type="button">
                <FontAwesomeIcon icon={faChevronRight} />
              </ArrowBtn>
            </Link>
          ) : (
            <ArrowBtn type="button" disable>
              <FontAwesomeIcon icon={faChevronRight} />
            </ArrowBtn>
          )}
        </Controller>
      </Footer>
    </Wrap>
  );
};

export default SerieList;
