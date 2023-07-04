function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    //     Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

    // For example,

    // [true,  true,  true,  false,
    //   true,  true,  true,  true ,
    //   true,  false, true,  false,
    //   true,  false, false, true ,
    //   true,  true,  true,  true ,
    //   false, false, true,  true]
    // The correct answer would be 17.

    // Hint: Don't forget to check for bad values like null/undefined

    let contador = 0;
    for(let i = 0; i < arrayOfSheep.length; i++){
        if(arrayOfSheep[i] === true){
            contador++;
        }
    }

    return contador;
}

let sheep = [true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true];
console.log(countSheeps(sheep));