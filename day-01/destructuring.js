let animals = [
    "cow", "dog", "hen", "dog", "cat", "lion"
]
// destructuring array
let [a1,a2]= animals
console.log("a1:", a1)
console.log("a2:",a2)
let animal={
    name: "cow",
    color: "brown",
    no_of_legs:4,
}
//destructuring  object
let {color, no_of_legs, name}= animal
console.log("name:", name)
console.log("no of legs:", no_of_legs)
console.log("color", color)


//using destructuring in function parametrs 

let myfunction =({name})=>{
    console.log("namae inside function:",name)
}
myfunction(animal)