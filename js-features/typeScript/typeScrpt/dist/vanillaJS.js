"use strict";
//TODO Define type with variables
let a = 10; // auto detect the type
let b; // Manually define a type  // Detect an error because the type reconize as a number
//TODO Define type in functions
const isPair = (number) => {
    return number % 2 === 0 ? true : false;
};
console.log(isPair(11));
//TODO Types in advanced functions
//* type<type> || Type[] || void(Renvoi rien) || any(tout) || <type | type> (ou)
const addToEnd = (table) => {
    const out = [];
    for (let item of table) {
        out.push(item + '...');
    }
    return out;
};
console.log(addToEnd([3, 2, 1, 'BOUM']));
//TODO Define a type for a callback
const modulo = (number, callback) => {
    const rest = number % 2;
    return callback(rest);
};
let result = modulo(23, (rest) => {
    return console.log(rest);
});
//TODO Define object types
let returnObject = (object) => {
    return object.age;
};
console.log(returnObject({ firstname: 'Jérôme', age: 42 }));
//TODO Define optionnal type
const returnObject2 = (object) => {
    return object.age;
};
console.log(returnObject2({ age: 42 }));
//TODO Forcer le typage d'une variable
const returnNumber = (number) => {
    const stringToNumber = typeof (number) !== 'number' ? parseInt(number) : number;
    return stringToNumber;
};
console.log(returnNumber('15'), returnNumber(12));
