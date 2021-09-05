// When an object inherits its prototype from another object, it also inherits the supertype's
// constructor property.

function Animal(){}

Animal.prototype = {
    constructor: Animal,
    eat(){}
}
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
console.log(duck.constructor) // This will return Animal

// Manually set the constructor property of Bird to the Bird object:

Bird.prototype.constructor = Bird;
console.log(duck.constructor) // This will return Bird

// Practice

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird
Dog.prototype.constructor = Dog

let duck = new Bird();
let beagle = new Dog();