

/**
Copyright (c) [2026] [ankjs]
Filename: AnkThemeProvider.tsx
*/

import React, { useState, useCallback, useMemo } from 'react';
import {
  AnkThemeContext,
  ColorContext
} from '../contexts/AnkThemeContext';
import type { ThemeProviderProps } from '../types/themeTypes';
import useSystemTheme from '../hook/useSystemTheme';
//import MainUiView from './MainUiView';






const AnkThemeProvider = (props: ThemeProviderProps) => {
  //PROPERTY 
  const {
    children,
    colorsObjectProvide = "",
    colorsObject = "",
    defaultThemeMode = "system",
    style = {}
  } = props;


  // SYSTEM THEME MODE 🪝 
  // Assumed returns 'light' | 'dark'
  const system = useSystemTheme();

  // Determine initial active theme
  const initialActiveTheme = defaultThemeMode === "system" ? system : defaultThemeMode;


  //THEME MODE VALUE 
  const [theme, setTheme] = useState<'light' | 'dark'>(initialActiveTheme);

  // State for the user's selected preference
  const [themeType, setThemeType] = useState<'light' | 'dark' | 'system'>(defaultThemeMode);



  const setDarkTheme = useCallback(() => {
    if (theme === 'dark') return;
    setThemeType('dark');
    setTheme('dark');
  }, [theme, setThemeType, setTheme]);

  const setLightTheme = useCallback(() => {
    if (theme === 'light') return;
    setThemeType('light');
    setTheme('light');
  }, [theme, setThemeType, setTheme]);

  const setSystemTheme = useCallback(() => {
    if (themeType === 'system') return
    setThemeType('system');
    setTheme(system);
  }, [theme, setTheme, system, setThemeType]);



  // Memoize the context value to prevent unnecessary re-renders in consumers
  const contextValue = useMemo(
    () => ({
      theme,
      themeType,
      setTheme,
      
      
      setDarkTheme,
      setLightTheme,
      setSystemTheme,
    }),
    [theme, setTheme, setDarkTheme, setLightTheme, setSystemTheme],
  );



  // WONER COLOUR OBJECT 
  const colorObj = useMemo(() => ({
    ...colorsObject,
    ...colorsObjectProvide,
  }), [colorsObject, colorsObjectProvide]);



  return (
    <AnkThemeContext.Provider value={contextValue}>
      <ColorContext.Provider
        value={colorObj}
      >
        {children}
      </ColorContext.Provider>
    </AnkThemeContext.Provider>
  )
};
export default AnkThemeProvider;

/*

import React, { useState, useCallback, useMemo, ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode; // Fixes the "Type {} is not assignable to ReactNode" error
  colorsObjectProvide?: any;
  colorsObject?: any;
  defaultThemeMode?: 'light' | 'dark' | 'system';
  style?: React.CSSProperties;
}

const AnkThemeProvider = (props: ThemeProviderProps) => {
  const {
    children,
    colorsObjectProvide = {},
    colorsObject = {},
    defaultThemeMode = "system",
  } = props;

  const system = useSystemTheme(); // Assumed returns 'light' | 'dark'

  // Determine initial active theme
  const initialActiveTheme = defaultThemeMode === "system" ? system : defaultThemeMode;

  // State for the active visual mode
  const [theme, setTheme] = useState<'light' | 'dark'>(initialActiveTheme as 'light' | 'dark');
  
  // State for the user's selected preference
  const [themeType, setType] = useState<'light' | 'dark' | 'system'>(defaultThemeMode);

  const setDarkTheme = useCallback(() => {
    setTheme('dark');
    setType('dark');
  }, []);

  const setLightTheme = useCallback(() => {
    setTheme('light');
    setType('light');
  }, []);

  const setSystemTheme = useCallback(() => {
    setType('system');
    setTheme(system);
  }, [system]);



  const contextValue = useMemo(
    () => ({
      theme,
      themeType,
      setTheme,
      setDarkTheme,
      setLightTheme,
      setSystemTheme,
    }),
    [theme, themeType, setTheme, setDarkTheme, setLightTheme, setSystemTheme],
  );

  const colorObj = useMemo(() => ({
    ...colorsObject,
    ...colorsObjectProvide,
  }), [colorsObject, colorsObjectProvide]);

  return (
    <AnkThemeContext.Provider value={contextValue}>
      <ColorContext.Provider value={colorObj}>
        {children}
      </ColorContext.Provider>
    </AnkThemeContext.Provider>
  );
};
*/