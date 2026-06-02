let student = {
  name: "Kushal",
  age: 20,
  faculty: "BSc CSIT",
  city: "Kathmandu",
};

// convert object to arrays
let keyArray = Object.keys(student);
let valueArray = Object.values(student);
let entriesArray = Object.entries(student);

console.log(keyArray);
console.log(valueArray);
console.log(entriesArray);

// map
let upperKeys = keyArray.map((key) => key.toUpperCase());
console.log("Map:", upperKeys);

// forEach
valueArray.forEach((value) => {
  console.log("forEach:", value);
});

// find
let foundKey = keyArray.find((key) => key === "age");
console.log("Find:", foundKey);

// filter
let filteredKeys = keyArray.filter((key) => key.length > 3);
console.log("Filter:", filteredKeys);

// reduce
let totalLength = valueArray.reduce((acc, value) => {
  return acc + value.toString().length;
}, 0);
console.log("Reduce:", totalLength);

// for-in
for (let key in student) {
  console.log("for-in:", key, student[key]);
}

// for-of with destructuring on entries
for (let [key, value] of entriesArray) {
  console.log("for-of:", key, value);
}