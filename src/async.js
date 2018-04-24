const fetch = require("node-fetch");

console.log("\n ASYNC");

async function fetchCats(userID) {
  let response = await fetch(`http://catappapi.herokuapp.com/users/${userID}`);
  let data = await response.json();

  // this works but does each one sequentially, which is not performant as these can all be done at the same time
  /**const catNames = [];
  for (const catID of data.cats)
  {
    let response = await fetch(`http://catappapi.herokuapp.com/cats/${catID}`);
    let data = await response.json();
    catNames.push(data.name);
  }
  return catNames;*/

  // we could use promises here instead
  let results = await Promise.all(
    data.cats.map(async function(catID) {
      let response = await fetch(
        `http://catappapi.herokuapp.com/cats/${catID}`
      );
      let data = await response.json();
      return data.name;
    })
  )

  return results;
}

fetchCats(123).then(results => {
  console.log("Cat Results: ", results);
});

/**
 * Example of iterating sequentially with Promises but can see that await it much nicer
 */
const getAllUsers = new Promise((resolve, reject) => {
  setTimeout(resolve(["sarah", "laura", "andrew"]), 1000);
});
const processUser = user => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(user + " processed");
      resolve(user + " processed");
    }, 1000);
  });
};

// promises
getAllUsers.then(users => {
  console.log("getAllUsers", users);
  users.reduce((lastPromise, user) => {
    return lastPromise.then(() => processUser(user));
  }, Promise.resolve());
});

// await
getAllUsers.then(async function(users) {
  console.log("getAllUsers", users);
  for (let user of users) {
    await processUser(user);
  }
});

/**
 * Rejecting promises can be handled by throwing errors or Promise.reject
 * It will be handledby the reject method if defined, otherwise the catch
 */
function job() {
    return new Promise(function(resolve, reject) {
        setTimeout(reject, 500, 'Error happened');
    });
}

async function test() {
    try {
        let message = await job();
        console.log(message);
        return 'Hello world';
    }
    catch (error)
    {
        console.error(error);

        //throw new Error('throw - Error happened during test');
        return Promise.reject('Promise.reject - Error happened during test');
    }
}

test()
.then(message => { console.log(message) }, error => { console.log("Error handler:" + error) })
.catch(error => { console.log("Catch:" + error) });
