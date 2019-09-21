const _item = new WeakMap();
class Stack {
    constructor(){
        _item.set(this,[]);
    }
    get count(){
        return _item.get(this).length;
    }
    push(value){
        const item = _item.get(this);
        item.push(value);
    }
    pop(){
        const item = _item.get(this);
        if (item.length === 0)
            throw new Error('stack is empty');
        item.pop();
    }
    peek(){
        const item = _item.get(this);
        if (item.length === 0)
            throw new Error('stack is empty');
        return item[item.length - 1];
    }
}
const sk = new Stack();
