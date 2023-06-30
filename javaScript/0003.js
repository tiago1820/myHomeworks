// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

const countPositivesSumNegatives = input => {
    if (input === null || input.length === 0) {
        return [];
    }

    let count = 0;
    let sum = 0;
    let newArray = [];

    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        if (element > 0) {
            count++;
        } else if (element < 0) {
            sum += element;
        }

    }

    newArray.push(count);
    newArray.push(sum);

    return newArray;
}

// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let input = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
console.log(countPositivesSumNegatives(input));