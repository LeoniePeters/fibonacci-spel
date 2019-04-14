import FibonacciCheck from './FibonacciCheck'

test('Returns false when not Fibonacci sequence', () => {
  expect(FibonacciCheck([0, 1, 1, 2, 5, 7, 3, 5, 8, 13, 25])).toBe(false)
})

test('Returns true when contains Fibonacci sequence', () => {
  expect(FibonacciCheck([0, 1, 1, 2, 3, 5, 3, 5, 8, 13, 25])).toBe(1)
})

test('Returns true when contains Fibonacci sequence', () => {
  expect(FibonacciCheck([5, 3, 5, 8, 13, 25, 144, 233, 377, 610, 987])).toBe(6)
})