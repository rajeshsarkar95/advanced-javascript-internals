// Run: node 19-design-patterns/module-pattern.js

const cart = (() => {
  const items = [];

  return {
    add(item) {
      items.push(item);
    },
    getItems() {
      return [...items];
    }
  };
})();

cart.add("Keyboard");
console.log(cart.getItems());
