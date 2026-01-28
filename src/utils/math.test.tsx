import { describe, it, expect } from 'vitest'
import { add } from './math'

describe('math (unit)', () => {
  it('should run in node environment', () => {
    // Verify we're NOT in a browser environment
    expect(typeof globalThis.window).toBe('undefined')
  })

  it('should add two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})
