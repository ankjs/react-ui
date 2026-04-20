
import React, {
  ReactNode,
  ChangeEvent,
  CSSProperties
} from 'react';



export type calenderPropsType = {
  month?: string|number;
  year?:string| number;
  navStyle?: CSSProperties;
  style?: CSSProperties;
  onChange?: (value: string) => void;
  isLoad?: boolean;
  setIsLoad?: () => void,
  monthEventHas?: [],
  children?: ReactNode
}