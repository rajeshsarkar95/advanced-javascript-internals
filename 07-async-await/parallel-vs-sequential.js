// Run: node 07-async-await/parallel-vs-sequential.js

const wait = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

async function sequential() {
  const first = await wait(300, "first");
  const second = await wait(300, "second");
  return [first, second];
}

async function parallel() {
  const [first, second] = await Promise.all([
    wait(300, "first"),
    wait(300, "second")
  ]);
  return [first, second];
}

(async () => {
  console.time("sequential");
  console.log(await sequential());
  console.timeEnd("sequential");

  console.time("parallel");
  console.log(await parallel());
  console.timeEnd("parallel");
})();
