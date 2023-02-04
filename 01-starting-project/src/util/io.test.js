import { it, expect, vi, describe } from 'vitest'
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

describe('writeData()', () => {
  it('should execute the writeFile method', () => {
    const testData = 'Test'
    const testFilename = 'test.txt'
    
    writeData(testData, testFilename)
    expect(fs.writeFile).toBeCalled()
  })
  
  it('should execute the writeFile method with the correct arguments', () => {
    const testData = 'Test'
    const testFilename = 'test.txt'
    
    writeData(testData, testFilename)
    expect(fs.writeFile).toBeCalledWith(testFilename, testData) 
  })
  
  it('should return a promise that resolves to no value if called correctly', () => {
    const testData = 'Test'
    const testFilename = 'test.txt'
    
    return expect(writeData(testData, testFilename)).resolves.toBeUndefined()
  })
})