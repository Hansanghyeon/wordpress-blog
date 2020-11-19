import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
`;

export const Content = {
  Wrap: styled.div`
    width: 50%;
    padding-right: 8px;
  `,
  Inner: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    padding-bottom: 8px;
  `,
  Content: styled.div`
    /* height: 100%; */
    margin-bottom: 8px;
    box-sizing: border-box;
  `,
  Footer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Title: styled.h2``,
};
export const Thumbnail = {
  Wrap: styled.div`
    width: 50%;
    padding-left: 8px;
  `,
  Inner: styled.div``,
};
