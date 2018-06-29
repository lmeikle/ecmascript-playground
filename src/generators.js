// https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5
// 
console.log("\n GENERATORS");

function* generatorFunction() {
  // Line 1
  console.log("This will be executed first.");
  yield "Hello, "; // Line 2
  console.log("I will be printed after the pause");
  yield "World!";
}
const generatorObject = generatorFunction(); // Line 3
console.log(generatorObject.next().value); // Line 4
console.log(generatorObject.next().value); // Line 5
console.log(generatorObject.next().value); // Line 6
// This will be executed first.
// Hello,
// I will be printed after the pause
// World!
// undefined

function* generatorFuncWithReturn() {
  yield "generatorFuncWithReturn - 1";
  return "generatorFuncWithReturn - 2"; // Generator ends here.
  yield "generatorFuncWithReturn - 3"; // Will never be executed.
}
const generatorObjWithReturn = generatorFuncWithReturn(); // Line 3
console.log("1generatorObjWithReturn:" + generatorObjWithReturn.next().value); // Line 4
console.log("2generatorObjWithReturn:" + generatorObjWithReturn.next().value); // Line 5
console.log("3generatorObjWithReturn:" + generatorObjWithReturn.next().value); // Line 6
//1generatorObjWithReturn:generatorFuncWithReturn - 1
//2generatorObjWithReturn:generatorFuncWithReturn - 2
//3generatorObjWithReturn:undefined
