// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    // your code here

    if (array.length === 0) {
        return 0;
    } else {
        let longitud = array.length;
        let suma = 0;
        let promedio = 0;

        for (let i = 0; i < array.length; i++) {
            let elemento = array[i];
            suma += elemento;
        }

        promedio = suma / longitud;

        return promedio;
    }

}

console.log(findAverage([1,2,3,4]));