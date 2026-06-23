// Javascript is dynamically typed language, which means we don't have to specify the data type of a variable when we declare it.
// The data type is determined at runtime based on the value assigned to the variable. 
// This allows for flexibility in coding, but can also lead to unexpected behavior if not used carefully.


// PRIMITIVE DATA TYPES, REFERENCE DATA TYPES
// 7 types : String, Number, Boolean, null, undefined, BigInt, Symbol
/*
const id = Symbol("123")
const id2 = Symbol("123")
console.log(id === id2) // false
// because each symbol is unique, even if they have the same description.

// NON PRIMITIVE DATA TYPES , REFERENCE DATA TYPES
// Array, Object, Function

const arr = [1, 2, 3]
const obj = {
    name : "Sanchita",
    age : 21,
    city : "kolkata"
}

//function

const myFunc =function(){
    console.log("hello baddies");
}
console.log(myFunc); // [Function: myFunc]
myFunc(); // hello baddies
console.log(typeof arr); // object
console.log(typeof obj); // object
console.log(typeof myFunc); // function
*/
// Read documentation: https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack => primitives are stored in stack memory
// Heap => non-primitives are stored in heap memory

let myName = "Sanchita"
let myName2 = myName // myName2 is a copy of myName, both are stored in stack memory
myName2 = "Sanchita Gupta" // myName2 is now a new variable with a new value, it does not affect myName
// because myName2 is a copy of myName, not a reference to the same memory location.
console.log(myName);// Sanchita
console.log(myName2); // Sanchita Gupta

let user1 = {
    naam : "Arjun",
    age : 24
}
// user1 is stored in heap memory, and myUser1 is a reference to that memory location.
let myUser1 = user1;
myUser1.naam = "Arjun Gupta";
console.log(user1.naam); // Arjun Gupta
console.log(myUser1.naam); // Arjun Gupta