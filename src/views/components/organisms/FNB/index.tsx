import React from 'react';
// components
import Diglett from '@molecule/Diglett';
import DefaultFNB from './Default';

const RenderComponent = ({ type }: { type: string }) => {
  switch (type) {
    default:
      return <DefaultFNB />;
  }
};

type props = {
  type: string;
};
const FNB: React.FC<props> = ({ type }: props) => (
  <Diglett direction="bottom" type={type} RenderComponent={RenderComponent} />
);

export default FNB;
