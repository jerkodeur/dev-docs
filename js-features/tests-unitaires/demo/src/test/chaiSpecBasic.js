//TODO require chai()
const assert = require('chai').assert


describe('Tests with Chai... Basic', () => {
  it('basic tests', () => {
    //TODO isTrue() ...isFalse()
    assert.isTrue(1 === 1)
    assert.isFalse(1 === 2)
    //TODO isOk() ...isNotOk()
    assert.isOk('everything', 'everything is ok')
    assert.isNotOk(false, 'This is true')
    //TODO notStrictEqual
    assert.notStrictEqual(1, '1', 'This are not strict equal')
    //TODO isNull() ...isNotNull()
    assert.isNull(null, 'there was no error')

    let tea = 'tasty chai'
    assert.isNotNull(tea, 'great, time for tea!')
    //TODO exist() ...notExist()
    let foo = 'hi'
    assert.exists(foo, 'foo is neither `null` nor `undefined`')

    let bar = null
    assert.notExists(bar, 'bar is either null or undefined')
    //TODO isDefined() ..isUndefined()
    assert.isUndefined(undefined, 'no tea defined')
    tea = 'cup of chai'
    assert.isDefined(tea, 'tea has been defined')
  })
})