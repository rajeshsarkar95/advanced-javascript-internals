// Run: node 06-promises/promise-chaining.js

Promise.resolve(5)
  .then((number) => number * 2)
  .then((number) => number + 1)
  .then((result) => {
    console.log(result); // 11
    return result;
  })
  .catch((error) => console.error(error));
