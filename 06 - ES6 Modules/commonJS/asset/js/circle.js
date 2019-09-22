const _radius = new WeakMap();
class Circle {
    constructor(radius){
        _radius.set(this,radius);
    }
    draw(){
        console.log(`circle radius : ${_radius.get(this)}`);
    }
}

module.exports = Circle;
