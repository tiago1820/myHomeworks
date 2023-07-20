function nFibonacci(n){
    if(n === 0 || n === 1){
        return n;
    }

    return nFibonacci(n -1) + nFibonacci(n - 2);
                            //13
//                8                                  5
//           5               3                     3        2
//      3      2           2   1                 2     1    1   1
//    2   1   1 1        1 1  1 0              1  1   1 0  1 0  
//   1 1 1 0 1 0        1 0                   1 0   
//  1 0
}

console.log(nFibonacci(5));//13