// Run: node 03-event-loop/synchronous-vs-asynchronous.js

console.log("A: synchronous");

setTimeout(() => {
  console.log("C: asynchronous timer callback");
}, 0);

console.log("B: synchronous");

// Output: A, B, C
