import { describe, it, expect } from 'vitest'
import { createInput } from './Input'

describe('Input (browser mode)', () => {
  it('should run in browser environment', () => {
    // Verify we have access to browser globals
    expect(typeof window).toBe('object')
    expect(typeof document).toBe('object')
  })

  it('should create an input element', () => {
    const input = createInput({ placeholder: 'Enter text...' })
    expect(input.placeholder).toBe('Enter text...')
  })
})
