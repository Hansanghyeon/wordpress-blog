import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import DayAndNightToggle from '@atom/Toggle/DayAndNight';

const Button = styled.button`
  all: unset;
`;

const PCSC = () => {
  const themeContext = useContext(ThemeManagerContext);
  return (
    <Button type="button" onClick={() => themeContext.toggleDark()}>
      <DayAndNightToggle />
    </Button>
  );
};

export default PCSC;
