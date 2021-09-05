// Maually setting the prototype to a new object. It erases the constructor property.

duck.constructor === Bird; //false
duck.constructor === Object; //true
duck instanceof Bird; //true

// To fix this:
// Remember to define the constructor property as shown below

Bird.prototype = {
    constructor: Bird,
    numLegs: 2,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name); 
      }
    };
