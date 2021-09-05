// Set the prototype of the subtype to be an instance of parent type

Bird.prototype = Object.create(Animal.prototype);

let duck = new Bird("Donald");
duck.eat();

// duck now inherits all of Animal's properties, including the 
// eat method.

// Practice

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog();