import { describe, it, expect } from 'vitest'
import { createCounter } from './useCounter'

describe('useCounter (unit)', () => {
  it('should run in node environment', () => {
    // Verify we're NOT in a browser environment
    expect(typeof globalThis.window).toBe('undefined')
  })

  it('should initialize with default value of 0', () => {
    const counter = createCounter()
    expect(counter.count).toBe(0)
  })

  it('should increment the count', () => {
    const counter = createCounter(0)
    counter.increment()
    expect(counter.count).toBe(1)
  })
})
