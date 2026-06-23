console.log("5" > 3); // true, because "5" is converted to 5
console.log("05" > 3); // true, because "05" is converted to 5

console.log(null > 0); // false, because null = 0
console.log(null == 0); // false, because null = undefined
console.log(null >= 0); // true, because null = 0

// == , === and > , < , <= , >= work differently
// comparisions convert null to number , 0
// but equality check does not convert null to anything
