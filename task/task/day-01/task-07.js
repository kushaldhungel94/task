/*
  Task 7 – Default Parameters
  Write a function sayHello with a parameter name that defaults 
  to "Guest" if not provided. Log the output when called with and without an argument.
*/
// Function with default parameter
function sayHello(name = "Guest") {
  return `Hello, ${name}!`;
}

// Called with argument
console.log(sayHello("Kushal"));

// Called without argument
console.log(sayHello());
