function counter() {
    let contador = 0;//3

    return function () {//1 - 2 - 3
        contador++;
        return contador;//3
    }

}

let nuevoContador = counter();
console.log(nuevoContador());//1
console.log(nuevoContador());//2
console.log(nuevoContador());//3
console.log(nuevoContador());
console.log(nuevoContador());




