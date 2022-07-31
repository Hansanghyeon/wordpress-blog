import React from 'react';
import { Rnd } from 'react-rnd';

const RndDiv = (props) => {
  const { children, style, ...rest } = props;
  return (
    <Rnd style={{
      ... {
        border: "3px dotted yellow",
        boxSizing: "border-box",
        overflow: "hidden",
      },
      ...style
    }} disableDragging={true} {...rest} >
      {children}
    </Rnd>
  )
}
export default RndDiv;
