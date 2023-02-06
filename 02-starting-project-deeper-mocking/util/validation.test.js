import { describe, it, expect } from 'vitest'
import { validateNotEmpty } from './validation'

it('should throw an error if an empty string is provided', () => {
  const input = ''
  const testError = () => validateNotEmpty(input)

  expect(testError).toThrow()
})

it('should throw an error if the provided string contains only spaces', () => {
  const input = '    '
  const testError = () => validateNotEmpty(input)

  expect(testError).toThrow()
})

it('should throw an error with the provided error message', () => {
  const input = '    '
  const errorMessage = 'The string contains only spaces'
  const testError = () => validateNotEmpty(input, errorMessage)

  expect(testError).toThrow(errorMessage)
})