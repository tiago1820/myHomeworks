function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena){
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(null, '*', '*');
let textoGuiones = crearCadena.bind(null, '-', '-');
let textoUnderscore = crearCadena.bind(null, '_', '_');

console.log(textoAsteriscos('Hola'));
console.log(textoGuiones('Hola'));
console.log(textoUnderscore('Hola'));