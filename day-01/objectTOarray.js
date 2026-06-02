let student={
    fullname:" kushal Dhungel",
    roll:89,
    marks:4590,
    behaviour: "very short",
}
//converting object (key:value pair) to array
// loop cannot be used directly in object -
let keyarray = Object.keys(student)
console.log("onlu key array:",keyarray)
let valuearray = Object.values(student)
let entriesArray= Object.entries(student)
console.log("entries arrray:",entriesArray)