function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;

}

let textoAsteriscos = crearCadena.bind(null, "*", "*");
let textoGuiones = crearCadena.bind(null, "-", "-");
let textoUndescore = crearCadena.bind(null, "_", "_");

console.log(textoAsteriscos("Tiago"));
console.log(textoGuiones("Romina"));
console.log(textoUndescore("Luana y Josue"));
