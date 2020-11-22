import React, { useState } from "react";
import { GridList, Line, Text, Dots, Icon } from "./style";

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
    <GridList
      type="button"
      className={`animation`}
      active={isActive}
      onClick={_handleClick}
    >
      <Icon>
        <Dots active={isActive}>
          <i />
          <i />
          <i />
          <i />
        </Dots>
        <Line active={isActive}>
          <i />
          <i />
          <i />
          <i />
        </Line>
      </Icon>
      <Text active={isActive}>
        <span>Grid</span>
        <span>List</span>
      </Text>
    </GridList>
  );
};

export default GridAndListToggle;
