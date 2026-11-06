// Run: node 03-event-loop/event-loop-execution-order.js

console.log("1. Start");

setTimeout(() => {
  console.log("5. Timer task");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise microtask");
});

queueMicrotask(() => {
  console.log("4. queueMicrotask callback");
});

console.log("2. End");

// Expected order in modern browsers and Node.js for this example:
// 1. Start
// 2. End
// 3. Promise microtask
// 4. queueMicrotask callback
// 5. Timer task
//
// A 0ms timer is not synchronous. Its callback runs in a later task.
