function nFibonacci(n) {
    if (n === 1 || n === 0) {
        return n;
    } else {
        return nFibonacci(n - 1) + nFibonacci(n - 2);
        
    }

}
console.log(nFibonacci(5))
//0  1  2  3  4  5  6  7   8   9
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34,