import styled from 'styled-components';
import { transparentize } from 'polished';

export const RootWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;
export const Wrap = styled.div`
  font-size: 0.7rem;
  word-break: keep-all;
  color: ${({ theme }) => transparentize(0.2, theme.palette.text[0])};
  display: flex;
  align-items: center;
`;

export const Profile = styled.div`
  overflow: hidden;
  margin-bottom: 0;
  margin-right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  position: relative;
  img {
    margin-bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
`;

export const Introduce = styled.div``;
