console.log("\n REST PARAMETERS");

function restTest(a, ...rest) {
  console.log("a: ", a); // "coffee"
  console.log("rest: ", rest); // ["tea", "coke"]
}
restTest("coffee", "tea", "coke");

// Rest parameters can be destructured, that means that their data can be unpacked into distinct variables
function restTest2(a, ...[second, third]) {
  console.log("a: ", a); // "coffee"
  console.log("second: ", second); // "tea"
  console.log("third: ", third); // "coke"
}
restTest2("coffee", "tea", "coke");
