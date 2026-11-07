// Run: node 06-promises/promise-combinators.js

const fast = Promise.resolve("fast");
const slow = new Promise((resolve) => setTimeout(() => resolve("slow"), 100));

Promise.all([fast, slow]).then(console.log);        // ["fast", "slow"]
Promise.allSettled([fast, Promise.reject("oops")]).then(console.log);
Promise.race([fast, slow]).then(console.log);// "fast"
Promise.any([Promise.reject("no"),fast]).then(console.log);// "fast"

// all: fulfills when all fulfill; rejects on first rejection.
// allSettled: waits for every input to settle.
// race: settles with the first settled input.
// any: fulfills with first fulfillment; rejects if all reject.
