/**
 * Copyright (c) [2026] [ankjs]
 */


import { createContext } from 'react';
import { ThemeContextType, ColorsObject } from '../types/themeTypes';




export const AnkThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const ColorContext = createContext<ColorsObject | undefined>(undefined);
