import chai from 'chai'
import sinon from 'sinon'
const expect = chai.expect
const should = chai.should()

const chaiAsPromise = require('chai-as-promised')
chai.use(chaiAsPromise)

const getTodos = require('../../controllers/todos/index')

describe('#Itodo', () => {
  describe('verify if exist', () => {
    it('Should be defined', () => {
      expect(getTodos).not.to.be.an('undefined')
    })
    it('Should not be null', () => {
      expect(getTodos).not.to.be.a('null')
    })
    it('Should be an array of object', () => {
      expect(getTodos).to.be.an('object')
    })
  })
  describe('Api async getCall', () => {
    it('should return an array of object', () => {

    })
  })
  describe.skip('verify the properties', () => {
    it('Should have name properties', () => {
      expect(getTodos).to.have.property('name')
    })
    it('Should have name properties', () => {
      expect(getTodos).to.have.property('description')
    })
    it('Should have name properties', () => {
      expect(getTodos).to.have.property('status')
    })
  })
})

