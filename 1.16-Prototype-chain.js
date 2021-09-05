// An object's prototype itself is an object

function Bird(name) {
    this.name = name;
  }
  
  typeof Bird.prototype;

// A prototype is an object, a prototype can have its own prototype
// the prototype of Bird.prototype is Object.prototype

Object.prototype.isPrototypeOf(Bird.prototype)

let duck = new Bird("Donald");
duck.hasOwnProperty("name")

// hasOwnProperty is defined in Object.prototype, which can
// be accessed by duck.
// Bird is the supertype for duck, and object is a supertype for all objects in JavaScript.
// Any object can use the hasOwnProperty method.

// Practice
function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype);
  