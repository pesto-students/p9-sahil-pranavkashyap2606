var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};


MyQueue.prototype.push = function (x) {
    this.stack1.push(x);
};


MyQueue.prototype.pop = function () {
    while (this.stack1.length > 1) {
        this.stack2.push(this.stack1.pop());
    }
    const result = this.stack1.pop();
    while (this.stack2.length >= 1) {
        this.stack1.push(this.stack2.pop());
    }
    return result;
};


MyQueue.prototype.peek = function () {
    while (this.stack1.length > 1) {
        this.stack2.push(this.stack1.pop());
    }
    const result = this.stack1.pop();
    this.stack2.push(result);

    while (this.stack2.length >= 1) {
        this.stack1.push(this.stack2.pop());
    }
    return result;
};

MyQueue.prototype.empty = function () {
    return !this.stack1.length
};

let q = new MyQueue();
q.push(1);
q.push(3);
q.push(2);
console.log(q.peek());
console.log(q.pop());