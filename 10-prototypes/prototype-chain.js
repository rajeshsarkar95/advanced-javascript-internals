// Run: node 10-prototypes/prototype-chain.js

const animal = {
  speak() {
    return "Some sound";
  }
};

const dog = Object.create(animal);
dog.name = "Milo";
dog.speak = function () {
  return "Woof!";
};

console.log(dog.name);
console.log(dog.speak());
console.log(Object.getPrototypeOf(dog) === animal); // true
