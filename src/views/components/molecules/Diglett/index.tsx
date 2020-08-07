import React, { useState, useEffect } from 'react';
// component
import { FnbType } from '@store/Layout/index.type';
import { DiglettRoot, MoveWrap } from './index.style';

const variansts = {
  show: { translateY: 0 },
  hidden: { translateY: '100%' },
  toggle: {
    translateY: [0, 0, 0, '100%', '100%', 0, 0],
    borderTopLeftRadius: [0, 0, '20%', '20%', '20%', '20%', 0],
    borderTopRightRadius: [0, 0, '20%', '20%', '20%', '20%', 0],
  },
};

type props = {
  type: FnbType;
  RenderComponent: ({ type }: { type: FnbType }) => JSX.Element;
};
const Diglett: React.FC<props> = ({ type, RenderComponent }: props) => {
  const [delayedType, setDelayedType] = useState(FnbType.default);
  useEffect(() => {
    const timeout = setTimeout(() => setDelayedType(type), 400);
    return () => clearTimeout(timeout);
  });
  return (
    <DiglettRoot>
      <MoveWrap
        key={type}
        animate={type === FnbType.hidden ? 'hidden' : 'toggle'}
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
