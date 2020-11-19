import React from 'react';

import { Menu, Svg } from './index.style';

type MenuBtnProps = {
  isActive: boolean;
  onClick?: () => void;
};
const MenuBtn: React.FC<MenuBtnProps> = ({
  isActive,
  onClick,
}: MenuBtnProps) => {
  return (
    <Menu onClick={!isActive ? onClick : undefined}>
      <Svg isActive={isActive} viewBox="0 0 64 48">
        <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37" />
        <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24" />
        <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37" />
      </Svg>
    </Menu>
  );
};
MenuBtn.defaultProps = {
  onClick: undefined,
};

export default MenuBtn;
