// Run: node 09-hoisting/hoisting.js

console.log(legacyValue); // undefined
var legacyValue = "initialized";

// Function declarations can be called before their textual position.
sayHello();
function sayHello(){
  console.log("Hello");
}

// `let` and `const` are not usable before initialization (TDZ).
