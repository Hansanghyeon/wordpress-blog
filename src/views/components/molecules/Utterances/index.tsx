import React from 'react';
import Light from './Light';
import Dark from './Dark';

interface props {
  isDark?: boolean;
}
const Utterances = ({ isDark }: props) => (isDark ? <Dark /> : <Light />);

Utterances.displayName = 'Utterances';

export default Utterances;
