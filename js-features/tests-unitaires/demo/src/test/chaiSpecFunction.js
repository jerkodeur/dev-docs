const assert = require('chai').assert
//TODO chai.expect
const expect = require('chai').expect

const WaitFunction = require('../WaitFunction')

describe('Tests with Chai... Functions', () => {
  it('Functions', () => {
    //TODO isFunction()
    assert.isFunction(WaitFunction.Wait, 'Error, WaitFunction.wait is not a function')
    //TODO expect.be.a()
    expect(WaitFunction.Wait).to.be.a('function', 'This is not a function')
  })
  it('Must wait', (done => {
    WaitFunction.Wait(1500, (test) => {
      //TODO expect.to.equal()
      expect(test).to.equal(50)
      done()
    })
  }))
})