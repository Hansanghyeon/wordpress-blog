import React from 'react';
import styled from 'styled-components';

const Toggle = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 90px;
  height: 50px;
  background-color: ${props => (props.theme.isDark ? '#3C4145' : '#83D8FF')};
  border-radius: calc(90px - 6px);
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;
const ToggleHandler = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 3px;
  left: 3px;
  width: calc(50px - 6px);
  height: calc(50px - 6px);
  background-color: ${props => (props.theme.isDark ? '#FFE5B5' : '#FFCF96')};
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: ${props =>
    props.theme.isDark
      ? 'translate3d(40px, 0, 0) rotate(0)'
      : 'rotate(-45deg)'};
`;

const Crater = styled.div`
  position: absolute;
  background-color: #e8cda5;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  border-radius: 100%;
`;
const Crater1 = styled(Crater)`
  top: 18px;
  left: 10px;
  width: 4px;
  height: 4px;
  opacity: ${props => (props.theme.isDark ? 1 : 0)};
`;
const Crater2 = styled(Crater)`
  top: 28px;
  left: 22px;
  width: 6px;
  height: 6px;
  opacity: ${props => (props.theme.isDark ? 1 : 0)};
`;
const Crater3 = styled(Crater)`
  top: 10px;
  left: 25px;
  width: 8px;
  height: 8px;
  opacity: ${props => (props.theme.isDark ? 1 : 0)};
`;

const Star = styled.div`
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
`;
const Star1 = styled(Star)`
  top: 10px;
  left: 35px;
  z-index: 0;
  ${props =>
    props.theme.isDark
      ? `
    width: 2px;
    height: 2px;
  `
      : `
    width: 30px;
    height: 3px;
  `}
`;
const Star2 = styled(Star)`
  top: 18px;
  left: 28px;
  z-index: 1;
  ${props =>
    props.theme.isDark
      ? `
    width: 4px;
    height: 4px;
    transform: translate3d(-5px, 0, 0);
  `
      : `
    width: 30px;
    height: 3px;
  `}
`;
const Star3 = styled(Star)`
  top: 27px;
  left: 40px;
  z-index: 0;
  ${props =>
    props.theme.isDark
      ? `
    width: 2px;
    height: 2px;
    transform: translate3d(-7px, 0, 0);
  `
      : `
    width: 30px;
    height: 3px;
  `}
`;
const Star4 = styled(Star)`
  top: 16px;
  left: 11px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px, 0, 0);
  ${props =>
    props.theme.isDark
      ? `
    opacity: 1;
    transform: translate3d(0,0,0);
    transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  `
      : `
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  `}
`;
const Star5 = styled(Star)`
  top: 32px;
  left: 17px;
  z-index: 0;
  width: 3px;
  height: 3px;
  transform: translate3d(3px, 0, 0);
  ${props =>
    props.theme.isDark
      ? `
    opacity: 1;
    transform: translate3d(0,0,0);
    transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    `
      : `
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  `}
`;
const Star6 = styled(Star)`
  top: 36px;
  left: 28px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px, 0, 0);
  ${props =>
    props.theme.isDark
      ? `
    opacity: 1;
    transform: translate3d(0,0,0);
    transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    `
      : `
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  `}
`;

const DayAndNightToggle = () => {
  return (
    <Toggle>
      <ToggleHandler>
        <Crater1 />
        <Crater2 />
        <Crater3 />
      </ToggleHandler>
      <Star1 />
      <Star2 />
      <Star3 />
      <Star4 />
      <Star5 />
      <Star6 />
    </Toggle>
  );
};

export default DayAndNightToggle;
