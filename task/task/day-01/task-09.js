/*
     Task 9 – Spread Operator with Arrays
     Create two arrays [1, 2, 3] and [4, 5]. Merge them into 
     a new array using the spread operator and log the result.
*/
// Create arrays
const array1 = [1, 2, 3];
const array2 = [4, 5];

// Merge arrays using spread operator
const mergedArray = [...array1, ...array2];

// Log result
console.log(mergedArray);
