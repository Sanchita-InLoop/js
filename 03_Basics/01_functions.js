
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("I");
}
//CALL THE FUNCTION
// sayMyName()

// default value
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage()) // username = undefined



function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))
// [ 500, 2000]

// objects as parameter
const user = { 
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

// array as parameter
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));