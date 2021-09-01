// To easily create different objects,
// you can design your constructor to accept parameters:

function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }

// Then pass in the values as arg.

let yellowBird = new Bird("huangNiao", "yellow")
console.log(yellowBird.name)