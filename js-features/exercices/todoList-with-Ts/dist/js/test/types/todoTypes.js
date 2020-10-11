"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const expect = chai_1.default.expect;
const todoTypes = require('../../types/todo');
console.log(todoTypes.interface);
describe('#todoTypes', () => {
    it('Should exist', () => {
        expect(todoTypes.ITodo).to.exist;
    });
});
