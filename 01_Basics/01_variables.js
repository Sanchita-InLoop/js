const accountId = 110705
let accountEmail = "sanchita@gmail.com"
var accountPassword = "12345"
accountCity = "Bangalore" //GLOBAL VARIABLE not recommended to use, as it can be accessed and modified from anywhere in the code, which can lead to unexpected behavior and bugs.
let accountState; // variable declared but not assigned any value, so it is UNDEFINED
// accountId = 5 // not allowed as accountId is a constant
//allowed to change as variable declared with (let), (var), or (without var, let or const)
accountEmail = "sanchita@outlook.com" 
accountPassword = "54321"
accountCity = "Mumbai"

//var has function scope, let and const have block scope.
/*prefer not to use var,
because of the issue in block scope and functional scope.

BLOCK SCOPE: A block is a chunk of code bounded by {}. 
    Variables declared inside a block cannot be accessed from outside the block.
FUNCTION SCOPE: A function is a block of code designed to perform a particular task. 
    Variables declared inside a function cannot be accessed from outside the function.
*/
console.table([accountId, accountEmail, accountPassword, accountCity , accountState]);
console.log(accountPassword);
console.log(accountCity);