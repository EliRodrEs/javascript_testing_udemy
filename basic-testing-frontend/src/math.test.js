import { it, expect } from 'vitest'
import { add } from './math'

//test and it are the same thing. You can use whichever
// test('should summarize all number values in an array', method)

//it or test (description, the_actual_test)
it('should summarize all number values in an array', () => {
  //ARRANGE PHASE
  const numbers = [1, 2, 3]
  const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0)
  
  //ACT PHASE
  const result = add(numbers)
  
  //ASSERT PHASE
  expect(result).toBe(expectedResult)
})

it('should yield NaN if at least one invalid number is provided', () =>  {
  const inputs = ['invalid', 1]
  
  const result = add(inputs)

  expect(result).toBeNaN()
})

it('should yield a correct sum if an array of numeric string values is provided', () => {
  const numbers = ['1', '2']

  const result = add(numbers)
  const expectedResult = numbers.reduce((prevValue, curValue) => +prevValue + +curValue, 0)

  expect(result).toBe(expectedResult)
})

it('should yield 0 if an empty array is provided', () => {
  const input = []

  const result = add(input)

  expect(result).toBe(0)
})

it('should throw and error if no value is passed into the function', () => {
  const resultFn = () => {
    add()
  }
  
  expect(resultFn).toThrow(/is not iterable/) //This string parameter narrows out the exact error you expect to receive
})

it('should throw an error if provided with multiple arguments instead of an array', () => {
  const num1 = 1
  const num2 = 2
  const resultFn = () => {
    add(num1, num2)
  }
  
  expect(resultFn).toThrow(/is not iterable/) 
})