arr = [-11,2,0,-7,1,10,23];

function max_profit(para) {
    let min = para[0];
    let max = para[0];
    let diff = max - min;

    for (let i = 0; i < para.length; i++) {
        if (para[i] < min) {
            min = para[i];
            max = min;
        }
        if (para[i] > max) {
            max = para[i];
        }
        if ((max - min) > diff) {
            diff = max - min;
        }
    }
    return diff
}

console.log(max_profit(arr));