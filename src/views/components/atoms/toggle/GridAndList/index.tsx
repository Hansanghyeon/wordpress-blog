import React, { useState } from 'react';
import styled from 'styled-components';
import './index.style.scss';

const GAL = styled.button`
  --color: ${({ theme }) => theme.color.text[0]};
  --background: ${({ theme }) => theme.color.bg[0]};
  --icon-color: ${({ theme }) => theme.color.primary};
`;

interface props {
  onClick: () => void;
}
const GridAndListToggle = ({ onClick }: props) => {
  const [isActive, setIsActive] = useState(true);
  const _handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };
  return (
    <GAL
      type="button"
      className={`grid-list animation ${isActive && 'active'}`}
      onClick={_handleClick}
    >
      <div className="icon">
        <div className="dots">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="lines">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="text">
        <span>Grid</span>
        <span>List</span>
      </div>
    </GAL>
  );
};

export default GridAndListToggle;
