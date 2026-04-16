import React, {
  ReactNode,
  ChangeEvent,
  CSSProperties
} from 'react';



export interface InputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (val: string) => void;
  onChangeEvent?: (e?: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: string;
  children?: ReactNode;
  style?: CSSProperties;
}