console.log("\n PROXIES");

// The Proxy object is used to define custom behaviour for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).
// https://ponyfoo.com/articles/es6-proxies-in-depth
// Wrap target object in function and just return the proxy, so have no choice but to go though the proxy to access the target.

function proxied() {
  var target = {};
  var handler = {
    get(target, key) {
      invariant(key, "get");
      console.info(`Get on property "${key}"`);
      return target[key];
    },
    set(target, key, value) {
      invariant(key, "set");
      target[key] = value;
      return true;
    }
  };
  return new Proxy(target, handler);
}

function invariant(key, action) {
  if (key[0] === "_") {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}

let obj = proxied();
obj.x // Get on property "x"
