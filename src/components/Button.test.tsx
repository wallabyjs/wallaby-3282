import { describe, it, expect } from 'vitest'
import { createButton } from './Button'

describe('Button (browser mode)', () => {
  it('should run in browser environment', () => {
    // Verify we have access to browser globals
    expect(typeof window).toBe('object')
    expect(typeof document).toBe('object')
  })

  it('should create a button element', () => {
    const button = createButton({ label: 'Click me' })
    expect(button.textContent).toBe('Click me')
  })
})
