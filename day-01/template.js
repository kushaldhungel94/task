// template literals: embeding variable value inside the string
// syntax: `{}
let message = "Welcome to first day js pratice";
let name1 = "Ram Khadka";
let role = "Teacher";
let salary = 400000;
// using template literals ti combine all these variables value
let data = `${message}, My full name is ${name1.toLowerCase()} and my role is ${role}, My salary is ${salary}`;
console.log(data);

// defult parameters
let divide = (a = 1, b = 1) => {
  let divideRes = a / b;
  console.log(`Divide result = ${divideRes}`);
};
divide();
divide(34);
divide(45, 5);