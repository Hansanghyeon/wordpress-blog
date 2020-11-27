import styled from 'styled-components';

export const Wrap = styled.div`
  --color: ${({ theme }) => theme.color?.text[0]};
  color: var(--color, #333);
  display: grid;
  grid-template-columns: 16px auto;
  column-gap: 8px;
  > div {
    align-self: center;
  }
`;
export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 3px;
  text-align: center;
  img {
    width: 100%;
    margin-bottom: 0;
  }
`;
