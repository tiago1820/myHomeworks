function binarioADecimal(binario){
    let decimal = 0;
    let longitud = binario.length;

    for(let i = 0; i < binario.length; i++){
        let digito = binario.charAt(longitud - 1 - i);
        decimal += parseInt(digito * Math.pow(2, i));
        
    }

    return decimal;


}

console.log(binarioADecimal('1011'));