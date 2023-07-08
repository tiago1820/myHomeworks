// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.



function contador(string, letra){
    let contador = 0;
    for (let i = 0; i < string.length; i++){
        if(string[i] === letra){
            contador++;
        }
    }

    return contador;
}

console.log(contador('Oliveira', 'i'));