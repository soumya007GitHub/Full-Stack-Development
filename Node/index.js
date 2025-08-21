// Importing CJS Module

// WAY 1 ‼️
// const cjs = require('./cjs');
// console.log(cjs);
// console.log(cjs.add(5, 10));
// console.log(cjs.subtract(5, 8));
// console.log(cjs.multiply(4, 5));
// console.log(cjs.divide(8, 4));

// Way 2 ‼️
const { add, subtract, multiply, divide } = require('./cjs');
console.log(add(5, 10));
console.log(subtract(5, 8));
console.log(multiply(4, 5));
console.log(divide(8, 4));