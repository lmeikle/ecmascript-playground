/**
 * Benefits of Factory Function over Classes:
 *  -Encapsulation - When using factory function, only the methods we expose are public, everything else is encapsulated.
 *  When using classes everything is public.
 *  -No more 'this', so no more 'this' losing context problems (which are annoying and a source of bugs!)
 *  -Forces you to use Composition to reuse common functionality (as you can't do inheritance with factory functions)
 *
 * Disadvantages:
 *  -Consumes more memory (classes use prototypes, so shared instances), only will be noticable if creating thousands of objects though
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
