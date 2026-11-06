// Run: node 11-this-keyword/this-binding.js

const user = {
  name: "Rajesh",
  regularMethod() {
    return this.name;
  },
  arrowMethod: () => {
    // Arrow functions do not create their own `this`.
    return this?.name;
  }
};

console.log(user.regularMethod()); // Rajesh
console.log(user.arrowMethod());   // depends on surrounding top-level context
