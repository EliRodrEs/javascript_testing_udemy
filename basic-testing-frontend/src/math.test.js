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