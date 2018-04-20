/**
 * Benefits of Factory Function over Classes:
 *  -Encapsulation - When using factory function, only the methods we expose are public, everything else is encapsulated.
 *  When using classes everything is public.
 *  -No more 'this', so no more 'this' losing context problems (which are annoying and a source of bugs!)
 */

console.log("\n CLASS VS FACTORY");

// Class
class WeightLifter {
  constructor(name) {
    this.name = name;
  }

  trainsHard() {
    console.log(`${this.name} trains hard`);
  }

  liftHeavy() {
    console.log(`${this.name} lifts heavy`);
  }
}

// Factory Function
const weightLifter = name => {
  const trainsHard = () => {
    console.log(`${name} trains hard`);
  };

  const liftHeavy = () => {
    console.log(`${name} lifts heavy`);
  };

  return Object.freeze({
    trainsHard: trainsHard,
    liftHeavy: liftHeavy
  });
};

let c = new WeightLifter("Class");
c.liftHeavy();

let ff = weightLifter("Factory Function");
ff.liftHeavy();

// Factory Function
function WeightLifter2(name) {
  const trainsHard = () => {
    console.log(`${name} trains hard`);
  };

  const liftHeavy = () => {
    console.log(`${name} lifts heavy`);
  };

  return Object.freeze({
    trainsHard: trainsHard,
    liftHeavy: liftHeavy
  });
};

let ff2 = new WeightLifter2("Factory Function 2");
ff2.liftHeavy();
