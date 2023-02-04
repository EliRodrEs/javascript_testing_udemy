import { it, expect, vi } from 'vitest'
import writeData from './io'
import { promises as fs } from 'fs' // FOR JEST YOU HAVE TO MOCK BEFORE THE IMPORT LINE!!!!
import path from 'path' // FOR JEST YOU HAVE TO MOCK BEFORE THE IMPORT LINE!!!!



vi.mock('fs') // This replaces the module fs (that we imported in io.js) with a bunch of empty functions. [THIS DOESN'T GET EXECUTED IN PRODUCTION]
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1]
      }
    }
  }
})

it('should execute the writeFile method', () => {
  const testData = 'Test'
  const testFilename = 'test.txt'
  
  // return expect(writeData(testData, testFilename)).resolves.toBeUndefined()   [WITHOUT MOCKING]
  
/*   writeData(testData, testFilename)
  expect(fs.writeFile).toBeCalled() */

  // WITH PATH MOCKED:
  writeData(testData, testFilename)
  expect(fs.writeFile).toBeCalledWith(testFilename, testData) 
})