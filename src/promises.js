const fetch = require("node-fetch");

console.log("\n PROMISES");

/**
 * Simple Promise.all example
 */
const londonURL =
  "https://maps.googleapis.com/maps/api/geocode/json?address=London";
const sydneyURL =
  "https://maps.googleapis.com/maps/api/geocode/json?address=Sydney";

process.on("unhandledRejection", error => {
  // Will print "unhandledRejection err is not defined"
  console.log("unhandledRejection", error.message);
});

Promise.all([fetch(londonURL), fetch(sydneyURL)])
  .then(responses => {
    responses.forEach(response => {
      response.json().then(json => {
        console.log(`City: ${json.results[0].formatted_address}`);
      });
    });
  })
  .catch(error => {
    console.log("catch all error" + error);
  });

/**
 * Slightly more complicated example
 */
fetchUsers = userID => {
  return fetch(`http://catappapi.herokuapp.com/users/${userID}`)
    .then(response => response.json())
    .then(data => {
      let cats = data.cats;

      /**Returns nothing as forEach returns nothing
        return cats.forEach(catID => {
          return fetch(`http://catappapi.herokuapp.com/cats/${catID}`)
            .then(response => response.json())
            .then(data => data.name);
        });*/

      // map returns an array of promises, we can then use promise.all with it
      return Promise.all(
        cats.map(catID => {
          return fetch(`http://catappapi.herokuapp.com/cats/${catID}`)
            .then(response => response.json())
            .then(data => data.name);
        })
      ).then(names => names);
    });
};

fetchUsers(123).then(results => {
  console.log("Cat results: ", results);
});

/**
 * Timeout Example
 */
let timeoutPromise = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, "foo");
});

timeoutPromise.then(_ => {
  console.log("timeout finished");
});

/**
 * When use Promise.resolve(x), Promise.reject(x)
 * In simple terms, inside a then handler function:
 *  return x is equivalent to return Promise.resolve(x)
 *  throw x is equivalent to return Promise.reject(x)
 */
