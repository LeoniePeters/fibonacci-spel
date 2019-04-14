import FibonacciCheck from './FibonacciCheck'

test('Returns false when not Fibonacci sequence', () => {
  const input = [{ number: 0 }, { number: 1 }, { number: 1 }, { number: 2 },
  { number: 5 }, { number: 7 }, { number: 3 }, { number: 5 }]
  expect(FibonacciCheck(input)).toBe(false)
})

test('Returns true when contains Fibonacci sequence', () => {
  const input = [{ number: 0 }, { number: 1 }, { number: 1 }, { number: 2 },
  { number: 3 }, { number: 5 }, { number: 3 }, { number: 5 }]
  expect(FibonacciCheck(input)).toBe(1)
})

test('Returns true when contains Fibonacci sequence', () => {
  const input = [{ number: 8 }, { number: 13 }, { number: 25 }, { number: 144 },
  { number: 233 }, { number: 377 }, { number: 610 }, { number: 987 }]
  expect(FibonacciCheck(input)).toBe(3)
})