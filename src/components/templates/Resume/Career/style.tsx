import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

export const Company = styled.div`
  margin-bottom: 80px;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  span {
    font-weight: normal;
    font-size: 0.8em;
    margin-left: 4px;
  }
`;
export const ImageTooltipFor = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: 8px;
`;
export const ImageTooltip = styled(ReactTooltip)`
  padding: 0 !important;
  opacity: 1 !important;
  background-color: ${({ theme }) => theme.colors.primary} !important;
  img {
    width: 100%;
    max-width: 360px;
  }
  &.place-top:after {
    border-top-color: ${({ theme }) => theme.colors.primary} !important;
  }
  &.place-bottom:after {
    border-bottom-color: ${({ theme }) => theme.colors.primary} !important;
  }
  &.place-right:after {
    border-right-color: ${({ theme }) => theme.colors.primary} !important;
  }
  &.place-left:after {
    border-left-color: ${({ theme }) => theme.colors.primary} !important;
  }
`;
