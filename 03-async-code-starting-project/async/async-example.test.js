import { describe, it, expect } from 'vitest'
import { generateToken } from './async-example'

it('should generate a token value', (done) => {
  const testUserEmail = 'test@test.com'

  generateToken(testUserEmail, (err, token) => {
    try {
      expect(token).toBeDefined()
      //expect(token).toBe(2)
      done()
    } catch (error) { //WE NEED TRY/CATCH TO ACTUALLY GET THE REAL ERRORS FROM ASYNC CODE
      done(error)
    }
  })
})