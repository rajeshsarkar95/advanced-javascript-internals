// Run: node 01-execution-context/global-and-function-context.js

const globalMessage = "Global context";

function greet(name) {
  const message = `Hello, ${name}`;
  return message;
}

console.log(globalMessage);
console.log(greet("Rajesh"));

// Conceptually, the engine creates execution contexts to manage
// bindings, scope and the current execution state.
// Exact engine internals are implementation-specific.
