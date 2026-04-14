import { useContext } from 'react';
import { AnkThemeContext, ColorContext } from '../contexts/AnkThemeContext';
import { ThemeContextType } from '../types/themeTypes';


import { light as defaultLight, dark as defaultDark } from '../constants/colors'

const defaultColorsObject = {
  light: defaultLight,
  dark: defaultDark,
};



const useThemeColors = (): ThemeContextType | undefined => {
  const context = useContext(AnkThemeContext);

  if (!context) {
    throw new Error(` * useThemeColors must be used within a AnkThemeProvider * \n like this - \n import  AnkThemeProvider  from '@ankjs/react-ui;
    
        <AnkThemeProvider>
         <App />
        </AnkThemeProvider>
    `)
  };
  const { light, dark } = useContext(ColorContext) ?? defaultColorsObject;

  const reLight = light ?? defaultLight;
  const reDark = dark ?? defaultDark;

  const theme = context.theme || undefined;
  const themeMode = context.themeMode || undefined;

  if (theme === undefined || themeMode === undefined) {
    throw new Error(` * useThemeColors must be used within a AnkThemeProvider * \n like this - \n import  AnkThemeProvider  from '@ankjs/react-ui;
    
        <AnkThemeProvider>
         <App />
        </AnkThemeProvider>
    `);
  } else if (context.theme === "light") {
    return {
      ...reLight,
      themeMode,
    };
  } else if (context.theme === "dark") {
    return {
      ...reDark,
      themeMode,
    };
  };

  return {
    ...reLight,
    themeMode: "light"
  };

};
export default useThemeColors;