function DecimalABinario(num) {//8
    let binario = "";

    while (num >= 1) {//0 >= 1
        //          1 % 2 + "1000"
        binario = num % 2 + binario;
        //           2 / 2
        num = Math.floor(num / 2);//0
    }

    return binario;//1000
}

console.log(DecimalABinario(8));
