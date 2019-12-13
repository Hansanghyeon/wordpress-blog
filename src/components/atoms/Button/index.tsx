import * as React from 'react';
import styled from 'styled-components';

export interface IButtonProps {
  children?: React.ReactNode,
  onClick?: (e:any) => void,
  name?: string,
  emoji?: boolean,
}

const styles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const Big = styled.h1`
  font-size: 35px;
  font-weight: bold;
`;

const Button: React.SFC<IButtonProps> = (props) => (
  <button onClick={props.onClick} style={styles} type="button">
    {props.children}
  </button>
);
Button.defaultProps = {
  children: null,
  onClick: () => {},
  name: 'test',
  emoji: false,
};
export default Button;