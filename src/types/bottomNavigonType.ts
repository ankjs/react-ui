import {
  ReactNode, CSSProperties, ComponentType
} from 'react';






export type BottomNavigonType = {
  position?: CSSProperties['position'];
  place?: string;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  display?: CSSProperties['display'];
  justifyContent?: CSSProperties['justifyContent'];
  textDecoration?: CSSProperties['textDecoration'];
  zIndex?: CSSProperties['zIndex'];
  boxSizing?: CSSProperties['boxSizing'];
  style?: CSSProperties;
}
export type RouteConfig = {
  key?: number;
  name?: string,
  path?: string;
  icon?: ReactNode;
  type?: string 
};

export type BtnProps = {
  route?: RouteConfig;
  textDecoration?: CSSProperties['textDecoration'];
  primary?: CSSProperties['backgroundColor'];
  color?: CSSProperties['color'];
}