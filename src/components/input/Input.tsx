import React from 'react';
import type { InputProps } from '../../types/inputTypes'
import useThemeColors from '../../hook/useThemeColors';





const Input = (props: InputProps) => {
  const {
    name = "",
    label = "",
    placeholder = "",
    value = "",
    onChange = (val) => { },
    onChangeEvent = (e) => { },
    error = "",
    disabled = false,
    required = false,
    children,
    style = {},
  } = props;


  const inputName = name ? name : label;



  const {
    primary,
    inputBgActive,
    inputBgDeactivate,
    inputColorActive,
    inputColorDeactivate
  } = useThemeColors();

  const defColor = disabled ? inputColorDeactivate : inputColorActive;
  const defBrColor = disabled ? inputColorDeactivate : inputColorActive;
  const defBgColor = disabled ? inputBgDeactivate : inputBgActive;


  const {
    width = "94%",
    height = "60px",
    border = `1px solid`,
    padding = 5,
    margin = 5,
    borderRadius = 10,
    fontSize = 19,
    fontWeight,
    color,
    backgroundColor,
    borderColor
  } = style;




  const divStyleContener = {
    width,
    height,
    padding,
    fontWeight,
    margin,
    fontSize,
    borderRadius,
    border,
    borderColor: borderColor ? borderColor : defBrColor,
    backgroundColor: backgroundColor ? backgroundColor : defBgColor,
    color: color ? color : defColor
  };


  const inputStyle = {
    fontWeight,
    border,
    outline: 'none',
    width: "95%",
    fontSize,
    marginTop: margin,
  }





  return (
    <div>
      <div
        style={divStyleContener}
      >
        <div>
          {inputName}
          <span
            style={{
              color: "red"
            }}
          >
            {
              required && " *"
            }
          </span>
        </div>

        <input
          style={inputStyle}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            onChangeEvent(e);
          }}
          disabled={disabled}
        />

        {children && children}
      </div>

      <div style={{
        color: primary,
        padding,
        marginLeft: margin,
      }}>
        {
          error && error
        }
      </div>
    </div>
  );
};
export default Input;