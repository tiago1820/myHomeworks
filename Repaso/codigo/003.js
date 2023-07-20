function counter(){
    let contador = 0;

    function contar(){
        contador = contador + 1;
        return contador;
    }

    return contar;
}

let nuevoContador = counter();
console.log(nuevoContador());