// Run: node 08-closures/closure.js

function createCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// The inner function retains access to its lexical environment.
