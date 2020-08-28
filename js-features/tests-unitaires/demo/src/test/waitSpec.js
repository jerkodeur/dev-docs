const assert = require('assert')

const WaitFunction = require('../WaitFunction')

describe('Wait', () => {
  it('Should exist', () => {
    //TODO notEqual()
    assert.notEqual(WaitFunction.Wait, undefined, 'The wait function is undefined')
  })
  //TODO done()
  //* For asynchrone, will wait the request response
  it('Should wait', (done) => {
    WaitFunction.Wait(1500, (test) => {
      //TODO strictEqual() ...notStrictEqual()
      assert.notStrictEqual(test, 25)
      assert.strictEqual(test, 50)
      done()
    })
  })
  //TODO skip()
  //* Appear on blue in the tests list
  it('To increment later')
  it.skip('A future test', () => {
    // to do
  })
})