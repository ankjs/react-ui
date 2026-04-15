import React, { CSSProperties, ReactNode, Dispatch, SetStateAction } from 'react'
import { ColorPalette } from './colorType'

export interface ColorsObject {
  light?: any,
  dark?: any,
  system?: any,
}
export type ThemeModeType = 'light' | 'dark' | 'system'
export type Theme = 'light' | 'dark'

export interface ThemeHookReturn extends ColorPalette {
  themeMode: ThemeModeType | undefined // The resolved or default theme mode
}

export type ThemeProviderProps = {
  children: ReactNode; // Fixes the "Type {} is not assignable to ReactNode" error
  colorsObjectProvide?: any,
  colorsObject?: any,
  autoApply?: boolean,
  defaultThemeMode?: 'light' | 'dark' | 'system',
  style?: CSSProperties,
  overflow?: CSSProperties['overflow']
  color?: CSSProperties['color'],
  backgroundColor?: CSSProperties['backgroundColor'],
}

export type ThemeContextType = {
  theme?: 'light' | 'dark' | 'system',
  themeMode?: string,
  themeType?: string,
  setTheme: Dispatch<SetStateAction<'light' | 'dark'>>;
  setDarkTheme?: () => void,
  setLightTheme?: () => void,
  setSystemTheme?: () => void
}
