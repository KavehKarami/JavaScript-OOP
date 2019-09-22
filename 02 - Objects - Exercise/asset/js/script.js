function StopWatch() {
    let startTime,running,stopTime,duration = 0;
    this.start = ()=> {
        if (running)
            throw new Error('it has been started');
        running = true;
        startTime = new Date();
    };
    this.stop = ()=>{
        if (!running)
            throw new Error('it has not been started');
        running = false;
        stopTime = new Date();

        const second = (stopTime-startTime) / 1000;
        duration+= second;
    };
    this.reset = ()=>{
        startTime = null;
        stopTime = null;
        running = false;
        duration= 0;
    };
    Object.defineProperty(this,'duration',{
        get() {
            return duration;
        }
    })
}
