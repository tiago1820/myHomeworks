function nFactorial(n){//5
    if(n === 1){
        return n;
    }

    return n * nFactorial(n - 1);
    //5 * 4 * 3 * 2 * 1
}

console.log(nFactorial(5));