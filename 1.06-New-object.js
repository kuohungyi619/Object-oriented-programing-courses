// new operator is used when calling a constructor. 
// Without new, "this" inside the constructor would
// not point to the newly created object.

function Bird(){
    this.name = "lanNiao"
    this.color = "blue"
    this.legs = 4
}

let blueBird = new Bird;
