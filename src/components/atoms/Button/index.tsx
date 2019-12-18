import * as React from 'react';
// import styled from 'styled-components';

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

const Button: React.SFC<IButtonProps> = () => (
  <button style={styles} type="button">
    Button
  </button>
);
Button.defaultProps = {
  children: null,
  onClick: () => {},
  name: 'test',
  emoji: false,
};
export default Button;
