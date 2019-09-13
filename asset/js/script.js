    //Objects
//01 - Private Properties and Methods

/*

function Circle(radius = 1 ) {
    this.radius = radius;
    this.draw = ()=> "draw";
}
const another = new Circle(3);
another.radius = 2;
console.log(another);

*/

function Circle(radius ) {
    let number = radius;
    this.draw = ()=> number;
}
const another = new Circle(2);
console.log(another);
console.log(another.draw());

