# Output Prediction Practice

Predict the output before running:

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

Answer:

```text
A
D
C
B
```

Explanation: synchronous logs run first, then the Promise reaction microtask, then the eligible timer task.
