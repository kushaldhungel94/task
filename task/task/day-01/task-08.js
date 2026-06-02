/*
    Task 8 – Rest Operator (Sum of Numbers)
    Write a function sumAll using the rest operator (...numbers) that calculates 
    the sum of any number of inputs. Test with 1, 2, 3, 4.
 */
// Function using rest operator
function sumAll(...numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return sum;
}

// Test with numbers
console.log(sumAll(1, 2, 3, 4));
