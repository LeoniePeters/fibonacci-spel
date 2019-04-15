import FibonacciCheck from './FibonacciCheck'

test('Returns empty array when not Fibonacci sequence', () => {
  const input = [{ number: 0 }, { number: 1 }, { number: 1 }, { number: 2 },
  { number: 5 }, { number: 7 }, { number: 3 }, { number: 5 }]
  const func = jest.fn(arg => FibonacciCheck(arg))
  func(input);
  expect(func).toHaveReturnedWith([])
})

test('Returns empty array when Fibonacci sequence of 5, but starting with zero',
  () => {
    const input = [{ number: 0 }, { number: 1 }, { number: 1 }, { number: 2 },
    { number: 3 }, { number: 3 }, { number: 5 }, { number: 5 }]
    const func = jest.fn(arg => FibonacciCheck(arg))
    func(input);
    expect(func).toHaveReturnedWith([])
  })

test('Returns array of 1 string when contains 1 Fibonacci sequence', () => {
  const input = [{ number: 8 }, { number: 13 }, { number: 25 },
  { number: 144 }, { number: 233 }, { number: 377 }, { number: 610 },
  { number: 987 }]
  const func = jest.fn(arg => FibonacciCheck(arg))
  func(input);
  expect(func).toHaveReturnedWith(['3-5'])
})

test('Returns array of strings when contains more Fibonacci sequences', () => {
  const input = [{ number: 8 }, { number: 13 }, { number: 25 }, { number: 144 },
  { number: 233 }, { number: 377 }, { number: 610 }, { number: 987 },
  { number: 0 }, { number: 1 }, { number: 1 }, { number: 2 }, { number: 3 },
  { number: 5 }, { number: 8 }, { number: 13 }, { number: 21 }]
  const func = jest.fn(arg => FibonacciCheck(arg))
  func(input);
  expect(func).toHaveReturnedWith(['3-5', '9-8'])
})