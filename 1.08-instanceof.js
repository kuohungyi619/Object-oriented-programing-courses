// Anytime a constructor function creates a new object, 
// that object is said to be an instance.
// instanceof allows you to compare an object to a constructor
// returning true or false

let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird("Alexis", "black");
  
  crow instanceof Bird; // This will return true

// If an object is created without using a constructor,
// instanceof will return false.

let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
  };
  
  canary instanceof Bird; // This will return false

  

