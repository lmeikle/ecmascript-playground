console.log("\n MAPS AND SETS");

//MAP – collection of keys and values of any type
const map = new Map(); // Create a new Map
map.set('hobby', 'cycling'); // Sets a key value pair

const foods = { dinner: 'Curry', lunch: 'Sandwich', breakfast: 'Eggs' }; // New Object
const normalfoods = {}; // New Object
map.set(normalfoods, foods); // Sets two objects as key value pair

//the data inside it is made of key-value pairs, so you’ll want to use destructuring to unpack the key and value into two separate variables:
for (const [key, value] of map) {
    console.log(`${key} = ${value}`); // hobby = cycling  [object Object] = [object Object]
}

// alternatively we can use forEach
map.forEach((value, key) => {
    console.log(`${key} = ${value}`);
}, map); // hobby = cycling  [object Object] = [object Object]


//SET – ordered list, no duplicates, accessed using keys
const planetsOrderFromSun = new Set();
planetsOrderFromSun.add('Mercury').add('Venus').add('Earth') // Chainable Method

for (const planet of planetsOrderFromSun) {
   console.log(planet); // Same order in as out - Mercury Venus Earth
}
console.log(planetsOrderFromSun.size); // 3
planetsOrderFromSun.add('Venus'); // Trying to add a duplicate
console.log(planetsOrderFromSun.size); // Still 3, Did not add the duplicate
