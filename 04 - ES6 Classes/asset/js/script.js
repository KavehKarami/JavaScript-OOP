'use strict';
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
const hi = (str)=>{console.log(str)};
hi("Kaveh");

//class declaration
    //line 1 to 9

//class expression
const Radius = class{constructor(radius){
    this.radius = radius
}};
const rd = new Radius(1);
console.log(rd);

//static method
class Square{
    constructor(size,radius){
        this.size = size;
        this.radius = radius;
    }
    static parse(json){
        const size = JSON.parse(json).size;
        const radius = JSON.parse(json).radius;
        return new Square(size,radius)
    }
}
const sq = Square.parse('{"size": 2,"radius": 3}');
console.log(sq);

const That = function () {
    //age az arrow function estefade konim line 57 this be window bar nemigarde
    this.draw = function(){console.log(this)}
};
const t = new That();

const draw = t.draw;
draw();


const _size = Symbol();
const _draw = Symbol();
class SomeThing{
    constructor(radius){
        this[_size] = radius;
    }
    [_draw](){
        console.log('hello');
    }
}
const st = new SomeThing(1);
console.log(st);
console.log(st[_draw]());
console.log(st[_size]);


const _move = new WeakMap();
const _name = new WeakMap();
// const privateProps = new WeakMap();
class declare{
    constructor(name){
        _name.set(this,name);

        _move.set(this,()=>{
            console.log(_name.get(this));
            console.log(this);
        });

        // privateProps.set(this,{
        //     name,
        //     solve(){
        //         //..
        //     }
        // });
        // privateProps.get(this).name;
    }
    draw(){
        //inja move choon function hast yek () jelosh mizarim ke ejra ham beshe
        _move.get(this)();
    }
}
const d = new declare('Kasra');
console.log(d);
d.draw();
