// Run: node 07-async-await/async-await-basics.js

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("Start");
  await wait(300);
  console.log("After await");
}

main();
console.log("Main script continues");

// `await` pauses this async function's continuation, not the whole JS thread.
