// Run: node 15-modules/modules-demo.js

const { add } = require("./math");
console.log(add(10, 20)); // 30

// This folder uses CommonJS to work with the default package configuration.
// ES modules use `import` and `export` and can be enabled with package.json "type": "module".
