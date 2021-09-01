// For example:
function Bird(name) {
    this.name  = name;
    this.numLegs = 2;
  }
  
  let duck = new Bird("Donald");
  let canary = new Bird("Tweety");

// name and numLegs are called own properties, because they are
// defined on the instance object.
// Each Bird will have its own copy of these properties.

// For example:

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

// This will display the value ["name", "numLegs"];

