import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import DayAndNightToggle from '@atom/toggle/DayAndNight';

const ButtonWrap = styled.div`
  all: unset;
  outline: none;
  border: none;
  box-shadow: none;
`;

const PCSC = () => {
  const themeContext = useContext(ThemeManagerContext);
  return (
    <ButtonWrap onClick={() => themeContext.toggleDark()}>
      <DayAndNightToggle />
    </ButtonWrap>
  );
};

export default PCSC;
