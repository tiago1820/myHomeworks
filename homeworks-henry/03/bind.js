function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {//"Tiago"
    //              "*Tiago*"
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(null, "*", "*");
let textoGuiones = crearCadena.bind(null, "-",  "-");
let textoUnderscore = crearCadena.bind(null, "_", "_");

console.log(textoAsteriscos("Tiago"));
console.log(textoGuiones("Romina"));
console.log(textoUnderscore("Luana y Josue"));