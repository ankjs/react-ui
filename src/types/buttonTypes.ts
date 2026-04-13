import { ReactNode, CSSProperties, MouseEvent, FormEvent } from 'react'

export interface ButtonProps {
  children?: ReactNode
  name?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  onSubmit?: (event: FormEvent<HTMLButtonElement>) => void
  disable?: boolean
  width?: string | number
  height?: string | number
  borderWidth?: string | number
  cursor?: string
  borderColor?: string
  outline?: string
  borderStyle?: CSSProperties['borderStyle']
  color?: string
  fontSize?: string | number
  fontWeight?: CSSProperties['fontWeight']
  borderRadius?: string | number
  style?: CSSProperties
}
