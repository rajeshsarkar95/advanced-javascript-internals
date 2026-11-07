
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve,ms));
}
async function main(){
  
  console.log("Start");

  await wait(300);

  console.log("After await");

}
main();
console.log("Main script continues");
