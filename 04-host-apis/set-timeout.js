// Run: node 04-host-apis/set-timeout.js

console.log("Before timer");

setTimeout(() => {
  console.log("Timer callback");
}, 500);

console.log("After timer registration");

// setTimeout schedules work with the host. It does not block this script.
