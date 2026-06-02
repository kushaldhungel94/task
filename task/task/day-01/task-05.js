/*
Task 5 – Object Destructuring
Create an object person with keys name, age, and country. Destructure the object to extract name and country into variables and log them.
*/
// Create object
const person = {
  name: "Kushal",
  age: 19,
  country: "Nepal",
};

// Object destructuring
const { name, country } = person;

// Log values
console.log(name);
console.log(country);
