import React from 'react';
import { Coffee, Title, Button, Wrap } from './index.style';

const BMC = () => {
  return (
    <Wrap>
      <Button href="https://www.buymeacoffee.com/r1N7GR5" target="_blank">
        <Coffee src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" />
        <Title>Buy me a coffee</Title>
      </Button>
    </Wrap>
  );
};

export default BMC;
