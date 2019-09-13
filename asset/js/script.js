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

function Circle(radius = 1) {
    //be in soorat private mikonim
    let number = radius;
    this.draw = ()=> number;

//02 - Getters and Setters
    let defaultLocation = {x: 0 , y: 0};
    // this.getDefaultLocation = function () {
    //     return defaultLocation;
    // };

    //age khasti line 36 ta 40 ro az comment dar biari line 27 ta 33 ro comment kon ta asaresh ro bebini
    defaultLocation = {};
    Object.defineProperty(defaultLocation,"x", {
        enumerable: true,
        value: 0,
    });
    Object.defineProperty(defaultLocation,"y", {
        enumerable: true,
        value: 0,
    });
    Object.defineProperty(this,'defaultLocation',{
        get(){
            let key =Object.keys(defaultLocation);
            let keyJoin = key.join('');

            if (keyJoin ==="xy")
                return defaultLocation;
            else
                throw new Error('invalid key')
        },
        set(value) {
            if (!value.x || !value.y)
                throw new Error('invalid location.');
            defaultLocation = value;
        }
    });
}

try{
    const another = new Circle(2);
    another.defaultLocation.z = 100 ;
    console.log(another);
    console.log(another.defaultLocation);
}
catch (e) {
    console.log(`%c ${e.message}`,'color:#f33');
}


