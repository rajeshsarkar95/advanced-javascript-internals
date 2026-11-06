// Run: node 03-event-loop/microtask-order.js

console.log("script start");

Promise.resolve().then(() => {
  console.log("promise 1");
  queueMicrotask(() => console.log("nested microtask"));
});

Promise.resolve().then(() => console.log("promise 2"));

console.log("script end");

// Output:
// script start
// script end
// promise 1
// promise 2
// nested microtask
//
// Microtasks are processed in queue order. The nested microtask is
// appended after the already queued promise 2 reaction.
