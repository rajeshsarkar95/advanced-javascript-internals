
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

