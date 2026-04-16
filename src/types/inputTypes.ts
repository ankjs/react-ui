import React, {
  ReactNode,
  ChangeEvent,
  CSSProperties
} from 'react';



export interface InputProps {
  id?: string;
  name?: string;
  className?: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  readOnly?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  error?: string;
  disabled?: boolean;
  required?: string;
  spellCheck?: boolean;
  autoComplete?: string;
  autoCapitalize?: string;
  form?: string;
  formAction?: string;
  formMethod?: string;
  children?: ReactNode;
  style?: CSSProperties;
  ref?: React.Ref<HTMLInputElement>;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  type?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  enterKeyHint?: React.HTMLAttributes<HTMLInputElement>["enterKeyHint"];


  // Events
  onChange?: (val: string) => void;
  onChangeEvent?: (e?: ChangeEvent<HTMLInputElement>) => void;

  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  onDoubleClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  onInvalid?: (e: React.FormEvent<HTMLInputElement>) => void;

  onCopy?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  onCut?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
}
