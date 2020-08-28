const assert = require('chai').assert

describe('Tests with Chai... Numbers', () => {
  it('number tests', () => {
    //TODO isAbove() ... isBellow()
    assert.isAbove(5, 2, '5 is strictly greater than 2')
    assert.isBelow(3, 6, '3 is lower than 6')
    //TODO isAtLeast()
    assert.isAtLeast(3, 3, '3 is at least equal or greater than 3')
    assert.isAtLeast(4, 3, '4 is greater than 3')
    //TODO isAtMost()
    assert.isAtMost(3, 6, '3 is less than or equal to 6')
    assert.isAtMost(4, 4, '4 is less than or equal to 4')
    //TODO isNaN() ...isNotNaN()
    assert.isNaN(NaN, 'NaN is NaN')
    assert.isNotNaN(4, '4 is not NaN')
  })
})