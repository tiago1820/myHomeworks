function decimalABinario(decimal){//11
    let binario = '';//'1011'
//           0 > 0
    while (decimal > 0){
        let residuo = decimal % 2;//
        binario = residuo + binario;//
        decimal = Math.floor(decimal / 2);//0
    }

    return binario;//'1011'
}

console.log(decimalABinario(11));