function HelloWorld(text) {
    this.text = text
}
const hi = new HelloWorld('Hello World');

console.log(HelloWorld.__proto__);
console.log(Object.getPrototypeOf(HelloWorld));

console.log(hi.__proto__);
console.log(Object.getPrototypeOf(hi));

console.log(hi.__proto__ === Object.getPrototypeOf(hi));

console.log(hi);

const arr = [];
console.log(arr);

console.log(HelloWorld.prototype);
console.log(Array.prototype);
console.log(Object.prototype);


function OverWrite(radius) {
    this.radius = radius;
    this.move = ()=>{console.log('move')}
}

//inja man natoonestam az arrow function estefade konam . nemidunam chera!!
OverWrite.prototype.draw = function(){
    this.move();
    console.log("draw");
};

//inja ham natoonestam az arrow function estefade konam;
OverWrite.prototype.toString = function(){return `radius = ${this.radius}`};

const ow = new OverWrite(2);
ow.draw();
console.log(ow.toString());


// function OverWrite(radius) {
//     this.radius = radius;
//     this.move = ()=>{
//         this.draw();
//         console.log('move')
//     }
// }
//
// OverWrite.prototype.draw = ()=>{console.log("draw");};
//
// OverWrite.prototype.toString = function(){return `radius = ${this.radius}`};
//
// const ow = new OverWrite(3);
// ow.move();
// console.log(ow.toString());


//return Instance(ownProperty) members
console.log(Object.keys(ow));

//return all members (ownProperty + prototype)
for (let key in ow)
    console.log(key);

console.log(ow.hasOwnProperty("radius"));
console.log(ow.hasOwnProperty("draw"));


Array.prototype.Kaveh = ()=>{
    //...
};
const array = [];
array.Kaveh();
