// Run: node 12-memory-management/weakmap.js

const privateData = new WeakMap();

function createUser(name) {
  const user = {};
  privateData.set(user, { name });
  return user;
}

const user = createUser("Rajesh");
console.log(privateData.get(user).name);

// WeakMap keys are weakly held objects, so the map alone does not keep
// a key object alive. Garbage collection timing is not deterministic.
