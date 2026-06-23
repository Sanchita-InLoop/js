// // array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]
// const myArr2 = new Array(1, 2, 3, 4)
// // console.log(myArr[1]);

// // Array METHODS

// // myArr.push(6)
// // myArr.push(7)
// // myArr.pop()

// // myArr.unshift(9) // not optimized for performance!
// // Inserts new elements at the start, and returns the new length of the array
// // myArr.shift()
// // Removes the first element and returns it. If the array is empty, undefined is returned and the array is not modified.

// // TRUE OR FALSE methods
// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(3));


// // const newArr = myArr.join()
// // Adds all the elements of an array into a string, separated by separator string(,)
// // console.log(myArr);
// // console.log(typeof newArr); // string
// // same value but different type


// // slice, splice
// // slice: return a shallow copy of a portion of an array
// console.log("A ", myArr);
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B ", myArr);

// // splice: changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2); // includes the last index

// PART 2

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// takes the whole array as a single element
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// concat method, return a new array
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread (...array) now the elements of this array are individuals
// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// flat: Returns a new array with all sub-array elements concatenated into it recursively 
// up to the specified depth

// isArray, from, of
console.log(Array.isArray("Hitesh")) // false
console.log(Array.from("abc")) // ['a' , 'b' , 'c' ]
console.log(Array.from({name: "hitesh"})) // interesting
// this gives empty array, not specified keys array or values array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));