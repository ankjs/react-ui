/*
* 
* Copyright (c) [2026] [ankjs]
* Filename: index.test.tsx
* 
*/
import * as React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'
import { AnkThemeProvider } from '../src/provider'
import { Input, PageView, Button } from '../src'



describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <AnkThemeProvider>
        <PageView>
          <Input />
          <Button />
        </PageView>
      </AnkThemeProvider>,
    )
  })
})
