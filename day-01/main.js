let obj ={
    price: 567.8,
    "name": "television ",
    status: true,
}// acessing value of object with key 
//1. Bracket notation 
console.log("price:", obj["price"])
//2. Dot notation recommendation 
console.log("Name:", obj.name)
console.log("price:", obj.price)
// adding new key:va;ue pair 
obj.address = "ktm"
console.log("after adding:",obj)
//updating existing keys value
obj.status= false
console.log("after updating:",obj)
//deleting key:value pair
delete obj.price
console.log("afteer deleting".at, obj)