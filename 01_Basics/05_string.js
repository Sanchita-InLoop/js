const name = "Saanchi"
const greeting = "Hello"

console.log(`${greeting} from ${name}`);

const naam = new String("Saanchi") //invoke object
//accessing key value pair
console.log(naam[0]); // S

console.log(naam.__proto__); // String.prototype
//LENGTH
console.log(naam.length); // 7
//toUpperCase
console.log(naam.toUpperCase()); // SAANCHI , not changed original string
console.log(naam); // Saanchi, string is immutable
//charAt
console.log(naam.charAt(0)); // S
console.log(naam.indexOf('a')); // 1, first occurrence of 'a'

//SUBSTRING
const newStr = naam.substring(-6, 4); // Saan (0, 1, 2, 3), 4 not included
const str = naam.slice(-6, 4); 
// slice(-6, 4) => slice(1, 4) => aan  whereas substring just ignores negative value and starts from 0
console.log(newStr); // Saan
console.log(str); // aan

//TRIM : removes whitespace from both ends of the string
const str1 = "   Hello World   ";
console.log(str1.trim()); // "Hello World"

// REPLACE : replaces a specified value with another value in a string
const str2 = "Hello World";
console.log(str2.replace("World", "Universe")); // "Hello Universe"

// INCLUDES : checks if a string contains a specified value
console.log(str2.includes("World")); // true

//(Write all the string methods later)