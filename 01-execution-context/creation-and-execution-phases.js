// Run: node 01-execution-context/creation-and-execution-phases.js

console.log(value); // undefined (var is initialized during declaration instantiation)
var value = 10;

function sayHi() {
  console.log("Hi");
}

sayHi();

// `let` and `const` are also created during scope setup, but remain
// uninitialized in the temporal dead zone until their declarations execute.
// Uncommenting the next two lines causes a ReferenceError:
// console.log(userName);
// let userName = "Rajesh";
