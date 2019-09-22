const _height = new WeakMap();
class Shape {
    constructor(color,height) {
        this.color = color;
        _height.set(this,height)
    }

    move(){
        console.log('move');
    }
}
class Circle extends Shape{
    constructor(color,radius){
        super(color);
        this.radius = radius;
    }
    draw(){
        console.log('draw');
    }

    move(){
        super.move();
        console.log('end of inheritance');
    }
}
const c = new Circle("red",1);
console.log(c);
