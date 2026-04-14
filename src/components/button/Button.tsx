import React from 'react';
import type { ButtonProps } from '../../types/buttonTypes';



const Button = (props: ButtonProps) => {
  const {
    label = "",
    onClick,
  } = props;
  return (
    <button
      onClick={onClick}
      style={{ padding: '10px 20px', cursor: 'pointer' }}
    >
      {label}
    </button>
  );
};
export default Button;