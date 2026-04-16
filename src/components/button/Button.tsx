import React from 'react';
import type { ButtonProps } from '../../types/buttonTypes';
import useThemeColors from '../../hook/useThemeColors'


const Button = (props: ButtonProps) => {

  const {
    children,
    name = "",
    label = "",
    onClick = () => { },
    onSubmit = () => { },
    disabled = false,
    style = {}
  } = props;
  const btnName = name ? name : label;

  const {
    width = "100%",
    height = "30px",
    borderWidth = "1px",
    cursor = "pointer",
    borderColor = "",
    outline = "none",
    borderStyle = "solid",
    color = "",
    fontSize = 14,
    fontWeight = 'bold',
    borderRadius = 5,
    backgroundColor = "",
  } = style;




  const {
    buttonBgActive,
    buttonBgDeactivate,
    buttonColorActive,
    buttonColorDeactivate
  } = useThemeColors();

  const btnColor = useThemeColors();

  const defColor = disabled ? buttonColorDeactivate : buttonColorActive;
  const defBrColor = disabled ? buttonColorDeactivate : buttonColorActive;
  const defBgColot = disabled ? buttonBgDeactivate : buttonBgActive;

  const styleContener = {
    width,
    height,
    borderWidth,
    borderStyle,
    outline,
    fontSize,
    fontWeight,
    borderRadius,
    cursor: disabled ? "none" : cursor,
    borderColor: borderColor ? borderColor : defBgColot,
    color: color ? color : defColor,
    backgroundColor: backgroundColor ? backgroundColor : defBgColot,
    ...style
  };



  return (
    <button
      style={styleContener}
      onClick={() => {
        if (disabled) return;
        onClick()
      }}
      onSubmit={() => {
        if (disabled) return;
        onSubmit();
      }}
      disabled={disabled}
    >
      {btnName ? btnName : children}
    </button >

  );
};
export default Button;