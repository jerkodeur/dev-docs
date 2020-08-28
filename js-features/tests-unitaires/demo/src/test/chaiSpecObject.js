const assert = require('chai').assert
const expect = require('chai').expect

const WaitFunction = require('../WaitFunction')

describe('Tests with Chai... Objects', () => {
  it('Should not be undefined', () => {
    //TODO expect.be.equal(), ...not.equal()
    expect(WaitFunction.Wait).to.not.equal(undefined)
  })
  it('Objects', () => {
    //TODO deepEqual()
    //? Verify if the children is also equal
    assert.deepEqual({ firstname: 'Jérôme' }, { firstname: 'Jérôme' })
    //TODO instanceOf(), ...notInstanceOf()
    var Tea = function (name) { this.name = name; }
    chai = new Tea('chai')
    assert.instanceOf(chai, Tea, 'chai is an instance of tea')
    //TODO include()
    assert.include({firstname: 'Jérôme'}, {firstname: 'Jérôme'}, 'Array does not include Jérôme')
    })
})