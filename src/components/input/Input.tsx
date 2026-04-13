import React from 'react';

import { InputProps } from '../../types/InputTypes';

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}
    />
  );
};
export default Input;