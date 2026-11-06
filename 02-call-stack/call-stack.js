// Run: node 02-call-stack/call-stack.js
// The call stack tracks currently executing function calls.

function third() {
  console.log("Inside third");
}
function second(){
  console.log("Inside second");
  third(); 
  console.log("Back inside second");
}
function first() {
  console.log("Inside first");
  second(); 
  console.log("Back inside first");
}
first();

// javascript Execution context
// global execution context
// Functions exeucutions contet


