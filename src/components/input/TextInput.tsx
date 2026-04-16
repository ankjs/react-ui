import React from 'react';
import type { InputProps } from '../../types/inputTypes'
import useThemeColors from '../../hook/useThemeColors';





const TextInput = (props: InputProps) => {
  const {
    id = "",
    name = "",
    className = "",
    label = "",
    placeholder = "",
    value = "",
    readOnly = false,
    defaultValue = "",
    minLength,
    maxLength,
    min,
    max,
    ref,
    spellCheck = false,
    autoComplete = "off",
    inputMode = "text",
    type = "text",
    onChange = (val) => { },
    onChangeEvent = (e) => { },
    onKeyDown = () => { },
    onKeyUp = () => { },
    onKeyPress = () => { },
    onDoubleClick = () => { },
    onFocus = () => { },
    onBlur = () => { },
    onInput = () => { },
    onInvalid = () => { },
    onCopy = () => { },
    onPaste = () => { },
    onCut = () => { },
    error = "",
    disabled = false,
    required = false,
    children,
    autoCapitalize = "characters",
    enterKeyHint,
    form,
    formAction,
    formMethod,
    style = {},
  } = props;






  const {
    primary,
    inputBgActive,
    inputBgDeactivate,
    inputColorActive,
    inputColorDeactivate
  } = useThemeColors();

  const defColor = (disabled || readOnly) ? inputColorDeactivate : inputColorActive;
  const defBrColor = (disabled || readOnly) ? inputColorDeactivate : inputColorActive;
  const defBgColor = (disabled || readOnly) ? inputBgDeactivate : inputBgActive;


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
          {label}
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
          id={id}
          name={name ? name : label}
          className={className}
          style={inputStyle}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            onChangeEvent(e);
          }}
          minLength={minLength}
          maxLength={maxLength}
          min={min}
          max={max}
          disabled={disabled}
          readOnly={readOnly}
          ref={ref}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onKeyPress={onKeyPress}
          onDoubleClick={onDoubleClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={onInput}
          onInvalid={onInvalid}
          spellCheck={spellCheck}
          autoComplete={autoComplete}
          inputMode={inputMode || type}
          onCopy={onCopy}
          onPaste={onPaste}
          onCut={onCut}
          autoCapitalize={autoCapitalize}
          enterKeyHint={enterKeyHint}
          form={form}
          formAction={formAction}
          formMethod={formMethod}
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
export default TextInput;