import React from 'react';
import { Coffee, Title, Button, Wrap } from './index.style';

export default function BMC({ url }: { url: string }) {
  return (
    <Wrap>
      <Button href={url} target="_blank">
        <Coffee src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" />
        <Title>Buy me a coffee</Title>
      </Button>
    </Wrap>
  );
}
