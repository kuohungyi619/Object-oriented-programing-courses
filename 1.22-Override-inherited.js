ChildObject.prototype = Object.create(ParentObject.prototype);
ChildObject.prototype.methodName = function(){};

// How to override
// Example:

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};

// If you have an instance let duck = new Bird(), you can call duck.eat()

// Practice

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function (){
  return "Alas, this is a flightless bird."
}


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());