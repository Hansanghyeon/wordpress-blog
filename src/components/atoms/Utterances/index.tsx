import React, { useContext } from 'react';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import Light from './Light';
import Dark from './Dark';

const Utterances = () => {
  const themeContext = useContext(ThemeManagerContext);

  return themeContext.isDark ? <Dark /> : <Light />;
};

export default Utterances;
