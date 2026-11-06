// Run: node 02-call-stack/call-stack.js
// The call stack tracks currently executing function calls.

function third() {
  console.log("Inside third");
}

function second() {
  console.log("Inside second");
  third(); // third is pushed above second
  console.log("Back inside second");
}

function first() {
  console.log("Inside first");
  second(); // second is pushed above first
  console.log("Back inside first");
}

first();

// Expected output:
// Inside first
// Inside second
// Inside third
// Back inside second
// Back inside first

// Stack while third() runs (top first):
// | third  |
// | second |
// | first  |
// | global |
