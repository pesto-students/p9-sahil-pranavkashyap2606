N = 5;
arr = [1,0,0,1,1,1,0];

function sort_arr(para) {
    if (para.length == 0) {return 'Please add elements to your array'}
    
    let low = 0
    let mid = 0
    let high = 0
    for (let i = 0; i < para.length; i++) {
        if (para[i] == 0) {
            low = low + 1;
        }
        else if (para[i] == 1) {
            mid = mid + 1;
        }
        else if (para[i] == 2) {
            high = high + 1;
        }
    }
    let low_arr = new Array(low).fill(0);
    let mid_arr = new Array(mid).fill(1);
    let high_arr = new Array(high).fill(2);
    let sorted_array = low_arr.concat(mid_arr);
    sorted_array = sorted_array.concat(high_arr);

    return sorted_array
}


console.log(sort_arr(arr));