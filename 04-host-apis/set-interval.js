// Run: node 04-host-apis/set-interval.js

let count = 0;

const intervalId = setInterval(() => {
  count += 1;
  console.log(`Tick ${count}`);

  if (count === 3) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 500);
