// Run: node 17-deep-vs-shallow-copy/copy.js

const original = {
  name: "Rajesh",
  settings: { theme: "dark" }
};

const shallow = {...original};
shallow.settings.theme = "light";

console.log(original.settings.theme); // "light": nested object is shared

// For supported structured-cloneable values:
const deep = structuredClone(original);
deep.settings.theme = "blue";
console.log(original.settings.theme); // "light"
