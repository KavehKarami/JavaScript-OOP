class Circle{
    constructor(radius){
        this.radius = radius;
        this.move = ()=>{console.log('move')}
    }
    draw(){
        console.log('draw');
    }
}
const c = new Circle(1);
console.log(c);


//function declaration
hello("salam dadashi");
function hello(str) {
    console.log(str);
}

//function expression
const name = (str)=>{console.log(str)};
name("Kaveh");

//class declaration
    //line 1 to 9

//class expression
const Square = class{constructor(radius){
    this.radius = radius
}};
const sq = new Square(1);
console.log(sq);
