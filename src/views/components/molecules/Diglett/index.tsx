import React, { useState, useEffect } from 'react';
// component
import { DiglettRoot, MoveWrap } from './index.style';

type props = {
  type: string;
};
const RenderComponent = ({ type }: props) => {
  switch (type) {
    case 'Demo2':
      return <div />;
    case 'Demo3':
      return <div />;
    default:
      return <div />;
  }
};

const variansts = {
  show: { translateY: 0 },
  hidden: { translateY: '100%' },
  toggle: {
    translateY: [0, 0, '100%', '100%', 0, 0],
    borderTopLeftRadius: [0, '20%', '20%', '20%', '20%', 0],
    borderTopRightRadius: [0, '20%', '20%', '20%', '20%', 0],
  },
};

const Diglett: React.FC<props> = ({ type }: props) => {
  const [delayedType, setDelayedType] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => setDelayedType(type), 400);
    return () => clearTimeout(timeout);
  });
  return (
    <DiglettRoot>
      <MoveWrap
        key={type}
        animate={type === 'hidden' ? type : 'toggle'}
        variants={variansts}
        transition={{
          duration: 1.5,
          times: [0, 0.2, 0.3, 0.7, 0.8, 1],
          ease: 'easeInOut',
          repeatDelay: 1,
        }}
      >
        {RenderComponent({ type: delayedType })}
      </MoveWrap>
    </DiglettRoot>
  );
};

export default Diglett;
