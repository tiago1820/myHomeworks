function binarioADecimal(binario){

    let decimal = 0;
    let exponente = 0;

    for(let i = binario.length -1; i >= 0; i--){

        let digito = parseInt(binario[i]);
        decimal += digito * Math.pow(2, exponente);
            
        exponente = exponente + 1;
    }

    return decimal;
}

console.log(binarioADecimal("1010"));