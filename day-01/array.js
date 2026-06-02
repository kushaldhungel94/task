// array example
let fruits = [
  "apple",
  "banana",
  "mango",
  "orange",
  "grapes",
  "pineapple",
  "papaya",
  "watermelon",
  "kiwi",
  "strawberry",
];

// getting element of some index
console.log(`fruits at 0 : ${fruits[0]}`);

// adding new element
fruits.push("pear");
console.log(fruits);

// remove last element
fruits.pop();
console.log(fruits);

// updating element of index 2
fruits[2] = "pear";
console.log("After updated at 2:", fruits);

// finding index of element
let indexpear = fruits.findIndex((fruit) => fruit === "pear");
console.log("Index of pear:", indexpear);

let indexofbanana = fruits.indexOf("banana");
console.log("Index of banana:", indexofbanana);

let indexkiwi = fruits.find((item) => item === "kiwi");
console.log(indexkiwi);

// removing element of specific index
fruits.splice(3, 1); // index 3 ko element remove

console.log("After removing index 3:", fruits);
// remove all elements
fruits.splice(0, fruits.length);
console.log("After remove all:", fruits);
// slice
let fruitsdata = [
  "apple",
  "banana",
  "mango",
  "orange",
  "grapes",
  "pineapple",
  "papaya",
  "watermelon",
  "kiwi",
  "strawberry",
];
// slice
let slicedFruits = fruitsdata.slice(2, 5);

console.log("Sliced fruits:", slicedFruits);
console.log("Original fruits:", fruitsdata);
// used foreach
fruitsdata.forEach((element, index) => {
  console.log(`Index:${index},\t\tElement:${element}`);
});
// for...in (index)
for (let index in fruitsdata) {
  console.log(index);
}

// for...of (value)
for (let fruit of fruitsdata) {
  console.log(fruit);
}
// map use
let upperFruits = fruitsdata.map((fruit) => {
  return fruit.toUpperCase();
});  

console.log("Uppercase fruits:", upperFruits);node 