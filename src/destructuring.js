
console.log("\n DESTRUCTURING");

/**
 * Unpack values from arrays, or properties from objects, into distinct variables
 */
const person = {
  firstName: 'Laura',
  surname: 'Meikle'
};
const { firstName, surname } = person;
console.log(firstName); // Laura
console.log(surname); // Meikle

// Destructuring of objects and arrays can be also be done in function arguments.
function greet({ name, greeting }) {
console.log(`${greeting}, ${name}!`)
}
greet({ name: 'Larry', greeting: 'Ahoy' })

//Default values can be assigned while destructuring arrays or objects.
function greet2({ name = "Mike", greeting }) {
  console.log(`${greeting}, ${name}!`)
}
greet({ greeting: 'Ahoy' });

let colours = ["Red", "Blue", "Green", "Yellow"];
const [a, b, c, d, e = "Black"] = colours;
console.log(d); // Yellow
console.log(e); // Black

//The assignment expressions work in loops, too.
let songs = [
  {
    title: "Hello",
    artist: "Adele"
  },
  {
    title: "In The End",
    artist: "Linkin Park"
  }
]
for (let {title, artist} of songs) {
  console.log(title + " by " + artist);
}

[i, j, ...rest] = [10, 20, 30, 40, 50];
console.log(i); // 10
console.log(rest); // [30,40,50]

// We can extract props and assign to a different name
const user = {
  id: 339,
  name: 'Fred',
  age: 42,
  education: {
    degree: 'Masters'
  }
};
const {name: callSign} = user;
console.log(callSign); // Fred

//Destructuring also works for nested objects.
const {education: {degree}} = user;
console.log(degree); // Masters

// default values
const {hobbies: {name} = {}} = user; // else we get an error
