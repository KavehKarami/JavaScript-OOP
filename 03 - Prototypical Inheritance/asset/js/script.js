function extend(Child,Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {
    this.color = color;
}
Shape.prototype.duplicate = () =>{console.log('duplicate')};

function Circle(radius , color) {
    Shape.call(this, color);
    this.radius = radius;
}

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
extend(Circle,Shape);

Circle.prototype.duplicate = ()=>{
    //age bekhaiim jofteshoon ro dar kenare ham dashte bashim do halat pish miad
    //1 - agar ma line 19 ro naneveshte boodim : Shape.prototype.duplicate();
    //age khasti hasele halate 1 ro bebini khate 21 ro comment kon

    //2 - hala ke line 19 hast be soorate zir amal mikonim , chun mikhaim az ye obj biarimesh be in obj bayad az call estefade konim
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
};

const s = new Shape();
const c = new Circle(1,"red");

console.log(c.constructor);

c.duplicate();
console.log(c.color);

function Square(size) {
    this.size = size;
}

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;
extend(Square,Shape);

const sq = new Square(10);
sq.duplicate();


    //mixin
function mixin(target,...sources) {
    Object.assign(target,...sources);
}

const canEat ={
    eat(){
        console.log('eat');
    }
};
const canWalk ={
    walk(){
        console.log('walk');
    }
};
const canSwim ={
    swim(){
        console.log('swim');
    }
};

function Person() {

}
// Object.assign(Person.prototype,canWalk,canEat);
mixin(Person.prototype,canWalk,canEat);
const p = new Person();
console.log(Object.getPrototypeOf(p));

function GoldFish() {

}
// Object.assign(GoldFish.prototype,canSwim,canEat);
mixin(GoldFish.prototype,canSwim,canEat);
const fish = new GoldFish();
console.log(Object.getPrototypeOf(fish));
