// const can't be reassigned
const a = 100;
//a = 40; // TypeError

// let vars are scoped
if (true) {
  let b = 'hello';
  console.log(b);
}
// console.log(b) // ReferenceError

// var vars are hoisted to the global scope
var VAR = "i'm a var";
const CONST = "i'm a const";
let LET = "i'm a let";

console.log(window.VAR) // ... var
console.log(window.CONST) // undefined

// in the browser, window.VAR will be defined but window.CONST and window.LET will not


// in the browser, d will exist as a global variable and it can be accessed outside of the function
function myF() {
  d = 7 // creates a global
  // var d = 7 // safe
  console.log(d)
}

