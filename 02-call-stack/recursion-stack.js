// Run: node 02-call-stack/recursion-stack.js

function factorial(n) {
  if (n <= 1) return 1; 
  return n * factorial(n - 1);
}
console.log(factorial(5)); 

// Calls are nested: factorial(5) -> factorial(4) -> ... -> factorial(1).
// Returns unwind in reverse order.
