// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function multiplicar(arreglo){
    let producto = 1;
    for (let i = 0; i < arreglo.length; i++){
        producto *= arreglo[i];
    }

    return producto;
}

console.log(multiplicar([1, 2, 3, 4]));