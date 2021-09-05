function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

// Inheritence:
// Make a supertype first

let animal = Object.create(Animal.prototype);

animal.eat();
animal instanceof Animal; //true

// Practice:

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype); 