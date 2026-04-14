



import React, { CSSProperties, ReactNode } from 'react'


export type MainPropsType = {
  children: ReactNode,
  autoApply: boolean,
  style?: CSSProperties,
  overflow?: CSSProperties['overflow']
}
