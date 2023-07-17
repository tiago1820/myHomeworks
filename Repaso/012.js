function cacheFunction(cb) {
    const cache = {};//{ 7: 49, 9: 81, 4: 16}

    return function (arg) {//9
        if (cache.hasOwnProperty(arg)) {
            return cache[arg];//
        } else {
            const result = cb(arg);//16
            cache[arg] = result;
            return result;//16
        }

    }

}

function square(n) {
    return n * n;
}

const squareCache = cacheFunction(square);
console.log(squareCache(7));
console.log(squareCache(9));
console.log(squareCache(9));
console.log(squareCache(4));