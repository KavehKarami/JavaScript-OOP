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
