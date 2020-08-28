const assert = require('chai').assert

const timer = require('../src/Timer')
const getCharacters = require('../src/getCharacters')

//TODO setTimeout test
describe('#Timer', () => {
  describe('prerequisite', () => {
    assert.exists(timer, 'The function doesn\'t exist')
    assert.isFunction(timer, 'Bad type detected')
  })
  describe('Return the good value', () => {
    it('should return the good value', async() => {
      await expect(timer(50)).resolves.toEqual('That Works')
    })
  })
  describe('Work asynchrously', () => {
    //TODO run timers concurrently
    //? Don't wait between the 2 async tests
    it.concurrent('should wait 300ms', async () => {
      const t = Date.now()
      await timer(300)
      expect(Date.now() - t).toBeGreaterThanOrEqual(300)
    })
    it.concurrent('should wait 500ms', async () => {
      const t = Date.now()
      await timer(500)
      expect(Date.now() - t).toBeGreaterThanOrEqual(500)
    })
  })
})

describe('#getCharacters', () => {
  describe('prerequisite', () => {
    it('should Exist', async () => {
      assert.exists(getCharacters)
    })
    it('should be a function', () => {
      assert.isFunction(getCharacters, 'getCharacters is not a function')
    })
  })
  describe('Connexion etablish', () => {
    it('should return code 404 if not found', async () => {
      await expect(getCharacters()).resolves.toMatch('status code 404')
      await expect(getCharacters('hector')).resolves.toMatch('status code 404')
    })
    it('Should return an object with good properties', async () => {
      const data = await getCharacters(430)
      //TODO Define number of expect essertion
      expect.assertions(3)
      expect(data).toHaveProperty('name')
      expect(data).toHaveProperty('father')
      expect(data).toHaveProperty('gender')
    })
    it('should return the good value', async () => {
      const data = await getCharacters(583)
      expect.assertions(3)
      expect(data.name).toEqual('Jon Snow')
      expect(data.father).toEqual('')
      expect(data.gender).toEqual('Male')
    })
  })
})