// DRY is short for Don't repeat yourself
// Repeated code is a problem is because any change requires fixing code in
// multiple places.

// For example:

Bird.prototype = {
    constructor: Bird,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  
  Dog.prototype = {
    constructor: Dog,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

// The code can be edited to follow the DRY principle by creating
// a supertype 

function Animal(){};

Animal.prototype = {
    constructor: Animal,
    describe: function(){
        console.log("My name is " + this.name);
    }
}
