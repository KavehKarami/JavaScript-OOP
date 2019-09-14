/*
************* In ravesh kheili bade kolan faghat exersice baraye yad girie *************
*/

    //raveshe man
function StopWatch() {
    let startTime,running,stopTime,duration = 0;

    Object.defineProperty(this,'duration',{
        get() {
            return duration;
        },
        set(v) {
            return duration = v;
        }
    });
}
StopWatch.prototype.start =function(){
    if (this.running)
            throw new Error('it has been started');
    this.running = true;
    this.startTime = new Date();
};
StopWatch.prototype.stop =function(){
    if (!this.running)
        throw new Error('it has not been started');
    this.running = false;
    this.stopTime = new Date();

    const second = (this.stopTime-this.startTime) / 1000;
    this.duration+=second;
};
StopWatch.prototype.reset =function(){
    this.reset = function(){
        this.startTime = null;
        this.stopTime = null;
        this.running = false;
        this.duration= 0;
    };
};

let sw = new StopWatch();

    //raveshe mosh
// function StopWatch() {
//     let startTime,stopTime,running,duration = 0;
//
//     Object.defineProperty(this,'duration',{
//         get() {
//             return duration;
//         },
//         set(value) {return duration = value;}
//     });
//     Object.defineProperty(this,'startTime',{
//         get() {return startTime;},
//         set(value) {return startTime = value;}
//     });
//     Object.defineProperty(this,'stopTime',{
//         get() {return stopTime;},
//         set(value) {return stopTime = value;}
//     });
//     Object.defineProperty(this,'running',{
//         get() {return running;},
//         set(value) {return running = value}
//     });
//
// }
// StopWatch.prototype.start =function(){
//     if (this.running)
//             throw new Error('it has been started');
//     this.running = true;
//     this.startTime = new Date();
// };
// StopWatch.prototype.stop =function(){
//     if (!this.running)
//         throw new Error('it has not been started');
//     this.running = false;
//     this.stopTime = new Date();
//
//     const second = (this.stopTime-this.startTime) / 1000;
//     this.duration+=second;
// };
// StopWatch.prototype.reset =function(){
//     this.reset = function(){
//         this.startTime = null;
//         this.stopTime = null;
//         this.running = false;
//         this.duration= 0;
//     };
// };
//
// let sw = new StopWatch();
