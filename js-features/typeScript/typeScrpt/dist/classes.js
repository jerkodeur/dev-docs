"use strict";
//TODO Typescript and classes
class testTypeScript {
    constructor(num1, num2) {
        this.number = num1;
        this.anotherNumber = num2;
        this.internNumber = 15;
        this.internNumber2 = 10;
    }
    // Function only available with the original class
    static helloWorld() {
        return 'Hello World';
    }
    returnInternNumber() {
        return this.internNumber + this.internNumber2;
    }
    addNumber() {
        return this.number + this.anotherNumber;
    }
    //TODO Define private method (usable only in the inner of the class)
    doubleNumber() {
        return this.addNumber() * 2;
    }
    returnNumber() {
        return this.doubleNumber();
    }
}
console.log(testTypeScript.helloWorld());
const number1 = new testTypeScript(20, 10);
console.log(number1.returnNumber());
console.log(number1.returnInternNumber());
//TODO getters and setters
class testGetterSetter {
    constructor(element = '') {
        this._element = element;
    }
    // Define the type of element
    set element(value) {
        this._element = value;
    }
    // return the element
    get element() {
        return this._element;
    }
}
const newClass = new testGetterSetter();
newClass.element = 'Hello world';
console.log(newClass.element);
class demoInterfaces {
    constructor(user) {
        this.user = user;
    }
    returnCurrentUser() {
        return this.user;
    }
}
const user1 = new demoInterfaces({
    firstname: 'Jérôme',
    lastname: 'Potié',
    age: 42,
    major: true
});
console.log(user1.returnCurrentUser());
