// If the variable name changes, any code referencing the 
// original name would need to be updated as well.
// To avoid this, use the this keyword:

let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + this.name + ".";}
  };