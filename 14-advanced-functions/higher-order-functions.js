// Run: node 14-advanced-functions/higher-order-functions.js

function applyOperation(a,b,operation){
  return operation(a,b);
}
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(applyOperation(2,3,add));      
console.log(applyOperation(2,3,multiply)); 
