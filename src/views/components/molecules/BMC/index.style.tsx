import Link from '@atom/Link';
import styled from 'styled-components';

export const Coffee = styled.img`
  margin-bottom: 0;
  margin-right: 4px;
  max-width: 16px;
`;
export const Title = styled.span`
  margin-left: 4px;
  font-size: 22px;
`;
export const Button = styled(Link)`
  display: flex;
  align-items: center;
  padding: 4px 12px 4px 8px;
  color: ${({ theme }) => theme.color.text[0]};
  background-color: #ff813f;
  border-radius: 5px;
  border: 1px;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  margin: 0 auto;
  font-family: 'Cookie', cursive;
  box-sizing: border-box;

  transition: box-shadow, opactiy, 0.5s;
  &:hover,
  &:active,
  &:focus {
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
  }
`;
