import { describe, it, expect, vi } from 'vitest'
import { generateReportData } from './data'

describe('generateReportData()', () => {
  
  it('should execute logFn if provided', () => {
    const logger = vi.fn()

    logger.mockImplementation(() => {
      
    }) //This overrides the global mock just for this file!! [mockImplementationOnce() does the same but just for the first time a method is called]

    generateReportData(logger)

    expect(logger).toBeCalled()
  })
})