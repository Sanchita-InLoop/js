// {} => scope
// var c = 200
let a = 100 // global scope
if(true){
    let a = 10 // block scope, local scope
    const b = 20
    // c = 30
}
// console.log(a); // a not defined
// console.log(b); // b not defined
// console.log(c); // c = 30
// issue with var, this is why var is no longer used

// Nested scope 

function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); can't access website
    two()
}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // accessed, no error

function addone(num){
    return num + 1
}

//addTwo(5) //error: cannot access before initialization

const addTwo = function(num){
    return num + 2
}

