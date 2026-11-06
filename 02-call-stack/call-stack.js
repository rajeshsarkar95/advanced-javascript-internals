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
// Functions exeucutions context
// eval Execution context

// memory creation phase
// Execution Phase

let val1 = 10;
let val2 = 20;
function addNum(num1,num2){
  let total = num1 + num2;
  return total;
}
let result = addNum(val1,val2);
let result2 = addNum(100,200);









