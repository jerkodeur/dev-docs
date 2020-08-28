const assert = require('chai').assert

describe('Tests with Chai... typeOf()', () => {
  it('Verify the types', () => {
    //TODO typeOf() ...notTypeOf()
    assert.typeOf('Hello', 'string')
    assert.typeOf(1, 'number')
    assert.typeOf({ firstname: 'Jérôme' }, 'object')
    assert.typeOf([1, 2, 3], 'array')
    assert.typeOf(/[a-z]/, 'regexp')
    assert.typeOf(undefined, 'undefined')
    assert.typeOf(null, 'null')

    assert.notTypeOf('Hello', 'number')
  })
})