// Run: node 16-generators-iterators/generator.js

function* ids() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = ids();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
