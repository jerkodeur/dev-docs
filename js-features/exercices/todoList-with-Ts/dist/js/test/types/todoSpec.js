"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const expect = chai_1.default.expect;
const should = chai_1.default.should();
const chaiAsPromise = require('chai-as-promised');
chai_1.default.use(chaiAsPromise);
const getTodos = require('../../controllers/todos/index');
describe('#Itodo', () => {
    describe('verify if exist', () => {
        it('Should be defined', () => {
            expect(getTodos).not.to.be.an('undefined');
        });
        it('Should not be null', () => {
            expect(getTodos).not.to.be.a('null');
        });
        it('Should be an array of object', () => {
            expect(getTodos).to.be.an('object');
        });
    });
    describe('Api async getCall', () => {
        it('should return an array of object', () => {
        });
    });
    describe.skip('verify the properties', () => {
        it('Should have name properties', () => {
            expect(getTodos).to.have.property('name');
        });
        it('Should have name properties', () => {
            expect(getTodos).to.have.property('description');
        });
        it('Should have name properties', () => {
            expect(getTodos).to.have.property('status');
        });
    });
});
