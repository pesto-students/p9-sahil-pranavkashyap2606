let hasDuplicate = (arr) => new Set(arr).size !== arr.length;

console.log(hasDuplicate([1, 2, 1, 3, 4, 3, 5, 6, 5]));