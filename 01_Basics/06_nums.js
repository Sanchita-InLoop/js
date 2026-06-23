const balance = new Number(100) // same as const balance = 100
console.log(balance);
console.log(balance.toString().length); // 3
console.log(balance.toFixed(1)); // 100.0 , returns a string not number
//to format a number to a specific number of decimal places

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
//Converts a number to a string by using the current or specified locale

// MATHS

console.log(Math); // Built-in Object
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5 , Returns the smallest integer greater than or equal to its numeric argument
console.log(Math.floor(4.9)); // 4 , Returns the greatest integer less than or equal to its numeric argument
// console.log(Math.min(4, 3, 6, 8)); //3
// console.log(Math.max(4, 3, 6, 8)); //8

console.log(Math.random()); // Returns a pseudorandom number between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);