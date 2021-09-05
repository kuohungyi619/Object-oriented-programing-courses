bird.name = "Duffy"; // This is a public property
// To make it private, one has to create a var within the constructor function.
// This changes the scope to not be globally.

// For example:
function Bird() {
    let hatchedEgg = 10;
  
    this.getHatchedEggCount = function() { 
      return hatchedEgg;
    };
  }
  let ducky = new Bird();
  ducky.getHatchedEggCount();

// Practice
function Bird() {
    let weight = 15
    this.getWeight = function(){
      return weight
    }
  
  }