

import { CSSProperties, ReactNode } from 'react';

export interface ButtonProps {
  name?: string;
  label?: string;
  children?: ReactNode;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  disabled?: boolean;
  borderWidth?: CSSProperties['borderWidth'];
  borderColor?: CSSProperties['borderColor'];
  outline?: CSSProperties['outline'];
  color?: CSSProperties['color'];
  borderStyle?: CSSProperties['borderStyle'];
  fontSize?: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
  borderRadius?: CSSProperties['fontWeight'];
  backgroundColor?: CSSProperties['backgroundColor'];
  cursor?: CSSProperties['cursor'];
  style?: CSSProperties;
  onClick?: () => void;
  onSubmit?: () => void;
};
