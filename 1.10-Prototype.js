// Prototype = 原型；
// If there are a lot of duplicated variable
// Use the prototype. Properties in the prototype are
// shared among all instances.

// For example

Bird.prototype.numLegs = 2;

// Below is the practice

function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4
  
  let beagle = new Dog("Snoopy");