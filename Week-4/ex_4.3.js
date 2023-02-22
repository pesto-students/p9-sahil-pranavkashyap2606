const Fib2 = (n) => ({
    [Symbol.iterator] : () => {
        let i = 1;
        let old = 0, new1 = 0;
        return {
            next : () => {
                if(i++ <= n){
                    [old, new1] = [new1, (old+new1) || 1];
                    return {value: old, done: false}
                }
                else{
                    return {done: true}
                }
            }
        } 
    }
});

const Fib = {
    n: 10, //Default value
    i:1,
    old:0,
    new1:0,

    [Symbol.iterator]() {
        return this
    },
    next(){
        if(this.i++ <= this.n){
            [this.old, this.new1] = [this.new1, (this.old+this.new1) || 1];
            return {value: this.old, done: false}
        }
        else{
            return {done: true}
        }
    }
}
Fib.n=5
console.log([...Fib]); //[ 0, 1, 1, 2, 3 ]

// for(var el of Fib){
//     console.log(Fib);
//     console.log(Fib.next());
// }

