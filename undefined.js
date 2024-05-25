let x; // variable declared but not initialized
console.log(x); // Output: undefined

function doSomething() {
// no return statement, so the function returns undefined
}
console.log(doSomething()); // Output: undefined

let obj = {};
console.log(obj.property); // Output: undefined
