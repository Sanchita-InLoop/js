"use strict"; //treat all JS code as modern/ newer version(ES6 code)

// alert("Go to hell") // can only be displayed in browser, not in node environment

console.log(4+9); console.log("Hello World") 
//; is optional but necessary when we want to write multiple statements in a single line.

//DATA TYPES IN JAVASCRIPT

// PRIMITIVE DATA TYPES
// number => (-2^53 + 1) to (2^53 - 1)
// bigInt => for numbers bigger than (2^53 - 1)
// string => "" or ''
// boolean => true or false
// null => empty value, standalong value
// undefined => value not assigned
// symbol => unique identifier, used for object properties
console.log(typeof 4); //number
console.log(typeof (4)); //as a method, it is still a number
console.log(typeof null); //null is of type object, which is a bug in JavaScript.
console.log(typeof undefined); //undefined is of type undefined

// NON-PRIMITIVE DATA TYPES
// OBJECT, ARRAY, FUNCTION