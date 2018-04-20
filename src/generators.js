console.log("\n GENERATORS");

function *sample(){
  yield "first";
  yield "second";
  yield "last";
}

let it = sample();

var result = it.next();
console.log("the", result.value, "iteration");
// => “the first iteration”

result = it.next();
console.log("the", result.value, "iteration");
// => “the second iteration”

result = it.next();
console.log("the", result.value, "iteration");
// => “the last iteration”
