function cacheFunction(cb) {
    let cache = {};

    return function (arg) {//9 - 9
        //         true
        if (cache.hasOwnProperty(arg)) {
            return cache[arg];//{9:81} -> 81
        } else {
            //               9
            cache[arg] = cb(arg);//{9:81}
            return cache[arg];//81
        }
    }

}

function square(n) {
    return n * n
}

let raiz = cacheFunction(square);
console.log(raiz(9));
