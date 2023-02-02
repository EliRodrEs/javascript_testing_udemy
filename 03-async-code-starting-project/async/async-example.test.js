import { describe, it, expect } from 'vitest'
import { generateToken, generateTokenPromise } from './async-example'

describe('generateToken()', () => {
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
})

describe('generateTokenPromise()', () => {
  it('should generate a token value', () => {
    const testUserEmail = 'test@test.com'
		//expect supports promises out of the box <3<3 (resolves or rejects)
		return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined() 
  })

	//You can also use async/await if you need to check multiple steps.
	it('should generate a token value', async () => {
    const testUserEmail = 'test@test.com'
		
		const token = await generateTokenPromise(testUserEmail)

		expect(token).toBeDefined()
  })

/* 	Even though the test worked as expected in the previous lecture, you should actually return the promise assertion in your tests:

	it('should generate a token value', () => {
		const testUserEmail = 'test@test.com'
		return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined()
	})

	This guarantees that Vitest / Jest wait for the promise to be resolved.
	You don't need to return when using async / await (since a function annotated with async returns a promise implicitly). 
*/
})
