console.log("\n LOOPING");

/**
 * Use for-of for Arrays.
 * Iterates over ITERABLE objects
 *
 * (forEach we can't break out of.
 * we could use for-in but that's designed for objects, and iterates over ALL enumerable properties in arbitrary order!)
 */
const arrayIteration = () => {
  console.log("\n arrayIteration");

  let colours = ["Red", "Blue", "Green", "Yellow"];

  for (let i = 0; i < colours.length; i++) {
    console.log("for loop: " + colours[i]);
  }

  colours.forEach(colour => {
    console.log("forEach: " + colour);
  });

  for (let colour of colours) {
    console.log("for of loop: " + colour);
  }
};

/**
 * Use for-in for objects
 * Iterates over ALL enumerable properties in arbitrary order
 * (forEach is an Array method, and for-of can only be used on iterables)
 */
const objectIteration = () => {
  console.log("\n objectIteration");
  let colours = {
    red: "Red",
    blue: "Blue",
    green: "Green",
    yellow: "Yellow"
  };

  for (let colour in colours) {
    console.log("for in loop: " + colours[colour]);
  }

  // Example showing when we might to use the hasOwnProperty check
  function ColoursManager() {
    this.name = "Hex";
  }
  ColoursManager.prototype = colours;

  var obj = new ColoursManager();

  // the below logs Hex, Red, Blue, Green, Yellow as it has inherited enumerable properties
  for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }

  // this just logs Hex only
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(`obj.${prop} = ${obj[prop]}`);
    }
  }
};

arrayIteration();
objectIteration();
