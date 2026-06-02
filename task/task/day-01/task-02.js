/*
  Task 2 – let and const Scope
  Create a let variable inside a block {} and try to access it outside. 
  Then do the same with a const variable. Observe the errors.
 */
{
  let age = 19;
  console.log(age); // accessible inside block
}

// Trying to access outside block
console.log(age); // Error: age is not defined

{
  const country = "Nepal";
  console.log(country); // accessible inside block
}

// Trying to access outside block
console.log(country); // Error: country is not defined
