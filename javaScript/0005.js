// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    let diferencia = dadYearsOld - sonYearsOld;
    let padre = diferencia;
    let hijo = 0;
    let prueba = 0;
    let resultado = 0;

    let i = 0;
    while(i < 200){
        padre++;
        hijo++

        if(padre === hijo * 2){
            prueba = hijo;
        }
        i++;
    }

    if(prueba < sonYearsOld){
        resultado = "Hace " + (sonYearsOld - prueba) + " años el padre tenia el doble de la edad del hijo.";
    } else {
        resultado = "En " + (prueba - sonYearsOld) + " años el padre tendra el doble de la edad del hijo.";
    }

    return resultado;

}

console.log(twiceAsOld(66,40));