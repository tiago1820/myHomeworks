// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    classPoints.push(yourPoints);
    let cantidadNotas = classPoints.length;
    let suma = 0;
    let promedio = 0;

    for (let i = 0; i < classPoints.length; i++) {
        let elemento = classPoints[i];
        suma += elemento;
    }

    promedio = suma / cantidadNotas;

    if (promedio < yourPoints) {
        return true;
    } else {
        return false;
    }

}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));