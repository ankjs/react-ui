/*
 *
 * Copyright (c) [2026] [ankjs]
 * Filename: index.test.tsx
 *
 */
import * as React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'
import AnkThemeProvider from '../src/provider/AnkThemeProvider'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<AnkThemeProvider />)
  })
})
