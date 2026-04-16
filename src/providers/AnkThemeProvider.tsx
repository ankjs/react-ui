

/**
Copyright (c) [2026] [ankjs]
Filename: AnkThemeProvider.tsx
*/

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import {
  AnkThemeContext,
  ColorContext
} from '../contexts/AnkThemeContext';
import type { ThemeProviderProps } from '../types/themeTypes';
import useSystemTheme from '../hook/useSystemTheme';
import MainUiView from './MainUiView';






const AnkThemeProvider = (props: ThemeProviderProps) => {
  //PROPERTY 
  const {
    children,
    colorsObjectProvide = "",
    colorsObject = "",
    defaultThemeMode = "system",
    autoApply = true,
    style = {},
    overflow = 'scroll',
    backgroundColor = "pink",
    color = "black"
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



  useEffect(() => {
    if (defaultThemeMode === 'system') {
      setTheme(initialActiveTheme);
      return setThemeType('system');
    };
  }, [defaultThemeMode, initialActiveTheme, setTheme, setThemeType]);



  const setDarkTheme = useCallback(() => {
    if (theme === 'dark') return;
    setThemeType('dark');
    return setTheme('dark');
  }, [theme, setThemeType, setTheme]);

  const setLightTheme = useCallback(() => {
    if (theme === 'light') return;
    setThemeType('light');
    return setTheme('light');
  }, [theme, setThemeType, setTheme]);

  const setSystemTheme = useCallback(() => {
    if (themeType === 'system') return
    setThemeType('system');
    return setTheme(system);
  }, [themeType, setTheme, system, setThemeType]);



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
    [theme, themeType, setTheme, setDarkTheme, setLightTheme, setSystemTheme],
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
        <MainUiView
          autoApply={autoApply}
          style={style}
          overflow={overflow}
          backgroundColor={backgroundColor}
          fontolor={color}
        >
          {children}
        </MainUiView>
      </ColorContext.Provider>
    </AnkThemeContext.Provider>
  )
};
export default AnkThemeProvider;

/*
      */