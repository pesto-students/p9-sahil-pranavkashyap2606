const m = [[1,2]]

function spiral_converter(a) {
    let final_arr = []
    if (a.length == 0) {return 'Please add elements to your array'}
    for (let i = 0; i < a.length; i++) {
        if (i%2 == 1) {
            final_arr = final_arr.concat(a[i].reverse());
        }
        else {
            final_arr = final_arr.concat(a[i]);
        }
    }
    return final_arr
}

console.log(spiral_converter(m));