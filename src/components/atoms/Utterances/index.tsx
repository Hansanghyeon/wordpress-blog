import useDarkMode from 'use-dark-mode';
import Light from './Light';
import Dark from './Dark';

const Utterances = () => {
  const { value } = useDarkMode();
  return value ? <Dark /> : <Light />;
};

Utterances.displayName = 'Utterances';

export default Utterances;
