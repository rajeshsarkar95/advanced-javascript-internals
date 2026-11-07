// Run: node 02-call-stack/stack-overflow.js
// Uncomment the call to observe a RangeError from unbounded recursion.

function recurseForever(){
  return recurseForever();
}
// recurseForever();
// Safer recursion uses a base case:
function countdown(number) {
  if (number <= 0) return;
  console.log(number);
  countdown(number - 1);
}

countdown(3);
