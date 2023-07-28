function BinarioADecimal(num) {//1000
    let decimal = 0;
    let posicion = 0;//4
    //           3               0 >= 0
    for (let i = num.length - 1; i >= 0; i--) {
        //                             1   *  8
        decimal += parseInt(num.charAt(i)) * Math.pow(2, posicion);//8
        posicion++;
    }

    return decimal;//8
}

console.log(BinarioADecimal('1000'));
