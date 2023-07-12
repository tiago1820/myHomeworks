// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let numero = array[i];
        if (numero === -Math.abs(numero)) {
            newArray.push(Math.abs(numero));
        } else if (numero === Math.abs(numero)) {
            newArray.push(-Math.abs(numero))
        }

    }

    return newArray;
}

console.log(invert([-1, 2, 3, 4, 5]));