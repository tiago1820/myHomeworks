function cacheFunction(cb) {
    let cache = {};

    function cachear(arg) {
        if (cache[arg]) {
            return cache[arg];
        } else { 
            let resultado = cb(arg);
            cache[arg] = resultado;
            return resultado;
        }
    }

    return cachear;
}

function square(n){
    return n * n;
}

let hacerCache = cacheFunction(square);
console.log(hacerCache(7))
