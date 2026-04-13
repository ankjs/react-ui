/**
Copyright (c) [2026] [ankjs]
Filename: Button.tsx
 * 
*/

import React, { CSSProperties } from 'react'
//import useDefaultThemeColors from '../hooks/useDefaultThemeColors';ButtonStyle

import { ButtonProps } from '../types/buttonTypes'

const Button: React.FC<ButtonProps> = ({
  children,
  name = '',
  onClick = () => { },
  onSubmit = () => { },
  disable = false,
  width = '100%',
  height = '40px',
  borderWidth = '1px',
  cursor = 'pointer',
  borderColor = '#fff',
  outline = 'none',
  borderStyle = 'solid',
  color = '#fff',
  fontSize = 12,
  fontWeight = 'bold',
  borderRadius = 5,
  style = {},
}) => {
  // Merging the individual style props with the optional style object
  const combinedStyles: CSSProperties = {
    width,
    height,
    borderWidth,
    cursor: disable ? 'not-allowed' : cursor,
    borderColor,
    outline,
    borderStyle,
    color,
    fontSize,
    fontWeight,
    borderRadius,
    opacity: disable ? 0.6 : 1,
    ...style,
  }

  return (
    <button
      style={combinedStyles}
      disabled={disable}
      onClick={(e) => {
        if (disable) return
        onClick(e)
      }}
      onSubmit={(e) => {
        if (disable) return
        onSubmit(e)
      }}
    >
      {name ? name : children}
    </button>
  )
}
export default Button
