import React from 'react';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';

interface Props {
  checked: boolean;
}
const Toggle = styled.div<Props>`
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 90px;
  height: 50px;
  background-color: ${(props):string => (props.checked ? '#749DD6' : '#83D8FF')};
  border-radius: calc(90px - 6px);
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;
const ToggleHandler = styled.div<Props>`
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 3px;
  left: 3px;
  width: calc(50px - 6px);
  height: calc(50px - 6px);
  background-color: ${(props):string => (props.checked ? '#FFE5B5' : '#FFCF96')} ;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0,0,0,.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform:  ${(props):string => (props.checked ? 'translate3d(40px, 0, 0) rotate(0)' : 'rotate(-45deg)')};
`;

const Crater = styled.div`
  position: absolute;
  background-color: #E8CDA5;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  border-radius: 100%;
`;
const Crater1 = styled(Crater)<Props>`
  top: 18px;
  left: 10px;
  width: 4px;
  height: 4px;
  opacity: ${(props):number => (props.checked ? 0 : 1)}
`;
const Crater2 = styled(Crater)<Props>`
  top: 28px;
  left: 22px;
  width: 6px;
  height: 6px;
  opacity: ${(props):number => (props.checked ? 0 : 1)}
`;
const Crater3 = styled(Crater)<Props>`
  top: 10px;
  left: 25px;
  width: 8px;
  height: 8px;
  opacity: ${(props):number => (props.checked ? 0 : 1)}
`;

const Star = styled.div`
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
`;
const Star1 = styled(Star)<Props>`
  top: 10px;
  left: 35px;
  z-index: 0;
  ${(props): string => (props.checked ? `
    width: 2px;
    height: 2px;
  ` : `
    width: 30px;
    height: 3px;
  `)}
`;
const Star2 = styled(Star)<Props>`
  top: 18px;
  left: 28px;
  z-index: 1;
  ${(props): string => (props.checked ? `
    width: 4px;
    height: 4px;
    transform: translate3d(-5px, 0, 0);
  ` : `
    width: 30px;
    height: 3px;
  `)}
`;
const Star3 = styled(Star)<Props>`
  top: 27px;
  left: 40px;
  z-index: 0;
  ${(props): string => (props.checked ? `
    width: 2px;
    height: 2px;
    transform: translate3d(-7px, 0, 0);
  ` : `
    width: 30px;
    height: 3px;
  `)}
`;
const Star4 = styled(Star)<Props>`
  top: 16px;
  left: 11px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px,0,0);
  ${(props): string => (props.checked ? `
    opacity: 1;
    transform: translate3d(0,0,0);
    transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  ` : `
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  `)}
`;
const Star5 = styled(Star)<Props>`
  top: 32px;
  left: 17px;
  z-index: 0;
  width: 3px;
  height: 3px;
  transform: translate3d(3px,0,0);
  ${(props): string => (props.checked ? `
    opacity: 1;
    transform: translate3d(0,0,0);
    transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    ` : `
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  `)}
`;
const Star6 = styled(Star)<Props>`
  top: 36px;
  left: 28px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px,0,0);
  ${(props): string => (props.checked ? `
    opacity: 1;
    transform: translate3d(0,0,0);
    transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    ` : `
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  `)}
`;

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  return (
    <div>
      <Toggle checked={darkMode.value} onClick={darkMode.toggle}>
        <ToggleHandler checked={darkMode.value}>
          <Crater1 checked={darkMode.value} />
          <Crater2 checked={darkMode.value} />
          <Crater3 checked={darkMode.value} />
        </ToggleHandler>
        <Star1 checked={darkMode.value} />
        <Star2 checked={darkMode.value} />
        <Star3 checked={darkMode.value} />
        <Star4 checked={darkMode.value} />
        <Star5 checked={darkMode.value} />
        <Star6 checked={darkMode.value} />
      </Toggle>
    </div>
  );
};

export default DarkModeToggle;
