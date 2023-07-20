function decimalABinario(decimal){
    if(decimal === 0){
        return "0";
    }

    let binario = "";

    while(decimal > 0){
        let digito = decimal % 2;
        binario = digito + binario;
        decimal = Math.floor(decimal / 2);
    }

    return binario;
}

console.log(decimalABinario(11))