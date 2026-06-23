/* let score = "99abc";

console.log(typeof score); // string
// type conversion
let numberScore = Number(score); // converts string to number
console.log(typeof numberScore); // number
console.log(numberScore); // NaN (Not a Number)
// Similarly String(score) will convert number to string

let temp = null
console.log(typeof temp); // object
let numTemp = Number(temp); // converts null to 0
console.log(numTemp); // 0
//But it still a issue because null doesn't always mean 0

let value = undefined;
let numValue = Number(value); // converts undefined to NaN
console.log(numValue); // NaN

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let val = "abc";
let boolVal = Boolean(val); // converts string to boolean
console.log(boolVal); // true for non empty string, false for empty string

let boolVal = true
let stringVal = String(boolVal); // converts boolean to string
console.log(stringVal); // "true"
*/

// OPERATORS IN JAVASCRIPT
/*
let a = 3
let negA = -a; // unary operator, negates the value of a
console.log(2**3) // 2^3 = 8

let str1 = "hello" + "world"; // string concatenation
console.log(str1); // "helloworld"

console.log(5 + "5"); // "55", string concatenation
console.log("5" + 3 + 5); // "535", string concatenation
console.log(5 + 3 + "5" + 8); // "858", addition first then string concatenation
// if the operand is a string, all operands after that will be treated as string
*/