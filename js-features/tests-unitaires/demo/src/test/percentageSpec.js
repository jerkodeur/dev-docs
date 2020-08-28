const assert = require('assert')

const Percentage = require('../Percentage')

describe('Percentage tests', () => {
  describe('#evolution', () => {
    it('should give an evolution', () => {
      assert.equal(Percentage.evolution(100, 200), 100)
      assert.equal(Percentage.evolution(100, 150), 50)
      assert.equal(Percentage.evolution(100, 50), -50)
    })
    //! Execute only this test
    it('should handle no evolution', () => {
      assert.equal(Percentage.evolution(0, 100), Infinity, 'Division per zero')
    })
    it('Return an round value', () => {
      assert.equal(Percentage.evolution(30,100), 233.33, 'Round decimal number')
    })
  })
})