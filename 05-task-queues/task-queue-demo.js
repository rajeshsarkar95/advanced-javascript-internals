// Run: node 05-task-queues/task-queue-demo.js

console.log("Task begins");

setTimeout(() => console.log("Timer task"), 0);

queueMicrotask(() => console.log("Microtask A"));

Promise.resolve().then(() => console.log("Microtask B"));

console.log("Task ends");

// Expected:
// Task begins
// Task ends
// Microtask A
// Microtask B
// Timer task
