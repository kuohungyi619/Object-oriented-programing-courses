// Right now, we can only add properties to the prototype
// individually;
// For example:
Bird.prototype.numLegs = 2;

Bird.prototype.eat = function() {
    console.log("nom nom nom");
  }
  
  Bird.prototype.describe = function() {
    console.log("My name is " + this.name);
  }

// Set all prototype to one object to be more efficient

Bird.prototype = {
    numLegs: 2,
    eat: function(){},
    describe: function(){}
}