function printNGE(arr, n) {
    var s = [];
    s.push({ value: arr[0], index: 0 });
    var result = new Array(n).fill(-1);
    for (var i = 1; i < n; i++) {
        if (s.length == 0) {
            s.push({ value: arr[i], index: i });
            continue;
        }
        while (s.length !== 0
            && s[s.length - 1].value < arr[i]) {
            result[s[s.length - 1].index] = arr[i]
            s.pop();
        }
        s.push({ value: arr[i], index: i });
    }
    return result
}

console.log(printNGE([8, 6, 0, 1, 3, 9], 6))