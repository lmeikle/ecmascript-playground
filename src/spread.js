console.log("\n SPREAD");

// The Object spread operator lets you build new objects from other objects.
// Previously we would have used Object.assign({}, defaults,  { visible: true })
const defaults = {
  soundOn: true
}
const options = {
  ...defaults,
  visible: true
}
console.log("options: " + options)

// The spread operator lets you build new arrays in the same way.
// Previously we would have use concat
let colours = ["Red", "Blue", "Green", "Yellow"];
const newColours = [
  ...colours,
  'Purple'
];
console.log("newColours: " + newColours)

// Spread can be used to expand arrays when passing arguements
function sum(a, b, c)
{
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
