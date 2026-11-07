// Run: node 06-promises/promise-basics.js

const promise = new Promise((resolve,reject) =>{
  const success = true;
  if (success) resolve("Operation completed");
  else reject(new Error("Operation failed"));
});
promise
  .then((value) => console.log(value))
  .catch((error) => console.error(error.message))
  .finally(() => console.log("Promise settled"));
