// Immediately Invoked Function Expressions (IIFE)
// function likhte hi execute krwana
// to avoid global scope pollution
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// ; because code doesn't know where to end a function

( (name) => {
    // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
