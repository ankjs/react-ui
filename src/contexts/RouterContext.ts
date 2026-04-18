/**
 * Copyright (c) [2026] [ankjs]
 */


import { createContext } from 'react';
import type { RouterContexTypes } from '../types/browserRouterTypes';

export const RouterContext = createContext<RouterContexTypes | undefined>(undefined);
