// An object inherits its prototype directly from the constructor

// For example:

function Bird(name) {
    this.name = name;
  }
  
  let duck = new Bird("Donald");

Bird.prototype.isPrototypeOf(duck); // return true
// 讀做Bird的prototype是duck的prototype
