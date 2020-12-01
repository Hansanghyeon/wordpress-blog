import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import { rhythm } from '@style/typography';
import { rgba } from 'polished';

export const Coffee = styled.img`
  margin-bottom: 0;
  margin-right: 4px;
  max-width: 16px;
`;
export const Title = styled.span`
  margin-left: 4px;
  font-size: 22px;
`;
export const Button = styled.a`
  display: flex;
  align-items: center;
  padding: 4px 12px 4px 8px;
  color: ${({ theme }) => theme.color.grayscales.dark[0]};
  background-color: #ff813f;
  border-radius: 5px;
  border: 1px;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px ${rgba('#ff813f', 0.5)};
  font-family: 'Cookie', cursive;
  box-sizing: border-box;

  transition: box-shadow, opactiy, 0.5s;
  &:hover,
  &:active,
  &:focus {
    opacity: 0.85;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  margin-top: ${rhythm(2)};
  display: flex;
  ${media.sm`
    width: auto;
    margin-top: 0;
  `};
`;
