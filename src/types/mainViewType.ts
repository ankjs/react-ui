



import React, { CSSProperties, ReactNode } from 'react'


export type MainPropsType = {
  children: ReactNode,
  autoApply: boolean,
  style?: CSSProperties,
  backgroundColor?: CSSProperties['backgroundColor'],
  overflow?: CSSProperties['overflow'],
  fontolor?: CSSProperties['color']
}
