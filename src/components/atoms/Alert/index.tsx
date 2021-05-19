import React from 'react';
import { FaRegCheckCircle, FaTimes } from 'react-icons/fa';
// Components
import { AlertSuccess, TadaCheckIconWrap, Wrap, TimesIconWrap } from './style';

interface AlertProps {
  children?: React.ReactNode;
  onClick?: () => void;
}
export const Alert: React.FC<AlertProps> = ({
  children,
  onClick,
}: AlertProps) => {
  return (
    <AlertSuccess>
      <Wrap.Root>
        <TadaCheckIconWrap>
          <FaRegCheckCircle />
        </TadaCheckIconWrap>
        <Wrap.Inner>
          <span>{children}</span>
        </Wrap.Inner>
        <TimesIconWrap onClick={onClick}>
          <FaTimes />
        </TimesIconWrap>
      </Wrap.Root>
    </AlertSuccess>
  );
};

export default Alert;
