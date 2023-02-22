function sum(...allItems) { 
    let total = 0;
    for (const item of allItems) {
       total += item;
     }
     return total;
  }

function memoize(fn) {
    const cache = new Map();
    return function (...args) { 
        const key = args.toString();
        if (cache.has(key)) {
            console.log('\ngetting from cache. Answer is: ', cache.get(key))
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        console.log('Calculating answer....\nAnswer is: ',cache.get(key))
        return cache.get(key);
    }
}


const MemoizeAdd = memoize(sum);
MemoizeAdd(50,100);
MemoizeAdd(50,100)