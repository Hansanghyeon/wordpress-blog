import * as React from 'react';

interface IButtonProps {
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

const Button: React.SFC<IButtonProps> = ({ onClick, children }:IButtonProps) => (
  <button onClick={onClick} style={styles} type="button">
    {children}
  </button>
);
Button.defaultProps = {
  children: null,
  onClick: () => {},
  name: 'test',
  emoji: false,
};
export default Button;
