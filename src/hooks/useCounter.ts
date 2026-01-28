// Simple counter hook logic (without React for node environment)
export interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const createCounter = (initialValue = 0): CounterState => {
  let count = initialValue

  return {
    get count() {
      return count
    },
    increment() {
      count++
    },
    decrement() {
      count--
    },
    reset() {
      count = initialValue
    },
  }
}
