//1
//120 -> 1
//60 -> 2
//20 -> 3
//5 -> 4 
function nFactorial(n){
    if(n === 1){
        return n;
    }else{
        return n * nFactorial(n - 1);
    }
}

console.log(nFactorial(5))