```js
function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    let message=`Count is${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];}

const [increment,log] = createIncrement();
increment();
increment();
increment();
log();

```


___

The output of the above code would be "Count is0". 

This is beacuse the "increment" and the "log" object stored after calling "createIncrement" function are two different objects and have different count values.
After the "increment" function is called thrice, "count"=2 but after calling the "log' function once, "count"=0.
