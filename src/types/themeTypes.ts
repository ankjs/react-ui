import React, { CSSProperties, ReactNode, Dispatch, SetStateAction } from 'react'
import { ColorPalette } from './colorType'

export interface ColorsObject {
  light?: any,
  dark?: any,
  system?: any,
}
export type ThemeModeType = 'light' | 'dark' | 'system'

export interface ThemeHookReturn extends ColorPalette {
  themeMode: ThemeModeType | undefined // The resolved or default theme mode
}

export type ThemeProviderProps = {
  colorsObjectProvide?: any,
  colorsObject?: any,
  defaultThemeMode?: 'light' | 'dark' | 'system',
  style?: CSSProperties,
  children: ReactNode; // Fixes the "Type {} is not assignable to ReactNode" error
}

export type ThemeContextType = {
  theme?: 'light' | 'dark' | 'system',
  themeMode?: string,
  setTheme: Dispatch<SetStateAction<'light' | 'dark'>>;
  setDarkTheme?: () => void,
  setLightTheme?: () => void,
  setSystemTheme?: () => void
}
