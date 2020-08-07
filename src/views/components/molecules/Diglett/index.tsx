import React, { useState, useEffect } from 'react';
// component
import { DiglettRoot, MoveWrap } from './index.style';

const bottom_variansts = {
  show: { translateY: 0 },
  hidden: { translateY: '100%' },
  toggle: {
    translateY: [0, 0, 0, '100%', '100%', 0, 0],
    borderTopLeftRadius: [0, 0, '30px', '30px', '30px', '30px', 0],
    borderTopRightRadius: [0, 0, '30px', '30px', '30px', '30px', 0],
  },
};
const right_variansts = {
  show: { translateX: 0 },
  hidden: { translateX: '-100%' },
  toggle: {
    translateX: [0, 0, 0, '-100%', '-100%', 0, 0],
    borderTopLeftRadius: [0, 0, '30px', '30px', '30px', '30px', 0],
    borderTopRightRadius: [0, 0, '30px', '30px', '30px', '30px', 0],
  },
};

type props = {
  direction?: string;
  type: string;
  RenderComponent: ({ type }: { type: string }) => JSX.Element;
};
const Diglett: React.FC<props> = ({
  direction,
  type,
  RenderComponent,
}: props) => {
  const [delayedType, setDelayedType] = useState('');
  let variansts;
  switch (direction) {
    case 'left':
      variansts = right_variansts;
      break;
    default:
      variansts = bottom_variansts;
      break;
  }

  useEffect(() => {
    const timeout = setTimeout(() => setDelayedType(type), 400);
    return () => clearTimeout(timeout);
  });

  return (
    <DiglettRoot>
      <MoveWrap
        key={type}
        animate={type === 'hidden' ? 'hidden' : 'toggle'}
        variants={variansts}
        transition={{
          duration: 2.5,
          times: [0, 0.4, 0.52, 0.58, 0.82, 0.88, 1],
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
