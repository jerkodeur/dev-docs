const assert = require('chai').assert

describe('Tests with Chai... Arrays', () => {
  it('Arrays', () => {
    //TODO isArray()... isNotArray()
    assert.isArray([1,2,3], 'It is an array')
    //TODO include()
    assert.include([1,2,3], 3, 'Array does not include 4')
    //TODO deepInclude()... notDeepInclude()
    assert.deepInclude([{firstname: 'Jérôme'}], {firstname: 'Jérôme'}, 'Jérôme does not exist in the array')
  })
})