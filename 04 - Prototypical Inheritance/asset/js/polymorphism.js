function extend(Child,Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}
function Shape() {
}
Shape.prototype.duplicate = () =>{console.log('duplicate')};


function Circle(radius) {
    this.radius = radius;
}
extend(Circle,Shape);
Circle.prototype.duplicate = ()=>{
    console.log('duplicate circle');
};

function Square(size) {
    this.size = size;
}
extend(Square,Shape);
Square.prototype.duplicate = ()=>{
    console.log('duplicate square');
};

const shapes = [new Circle(1),new Square(10)];
for (let shape of shapes)
    shape.duplicate();


/*
//agar mikhastim az in khasiat estefade nakoni intori be sheke zir bayad mineveshtim
//esme function ha namadine.

for (let shape of shapes){
    if (shape.type ==="circle")
        duplicateCircle();
    else if (shape.type ==="square")
        duplicateSquare();
    else
        duplicateShape();
}
*/
