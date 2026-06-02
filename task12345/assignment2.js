//Use map to double all numbers in [1, 2, 3, 4, 5]
let num =[1,2,3,4,5];
let updatenum= num.map(a=>a*2);
console.log(num);
console.log(updatenum);

//se filter to get all even numbers from [1, 2, 3, 4, 5, 6]
const evennum= num.filter(num=>num%2==0);
console.log(evennum);

//Use reduce to calculate the sum of [10, 20, 30, 40].
const values=[10,20,30,40];
const sum= values.reduce((total , current)=> total + current,0);
console.log(sum)


//se find to get the first object with age > 18 from an array of user objects.
const user =[
    { id:1, name:"kushal", age:19},
    {id:2, name:"bishal", age:19},
    {id:3, name:"kalu", age:13},
]
const adultusser= user.find(user=> user.age>18);
console.log(adultusser);

//Use forEach to log each element of ["apple", "banana", "orange"] with its index.
const fruits=["apple", "banana","orange"];
fruits.forEach((fruit , index)=> {
    console.log(`index:${index}, element:${fruit}`);
});

//Use map to extract only names from an array of user objects
const names= user.map(user=> user.name);
console.log(names);

// Use filter to get products with price < 100 from an array of product objects.
const products=[
    {id:1, name:"keyboard", price:300},
    {id:2, name:"Mouse", price:45},
    {id:3, name:"pencil", price:20},
    {id:4, name:"eraser", price:101}
];
const affordableproducts= products.filter(product => product.price < 100);
console.log(affordableproducts);

//Use reduce to find the maximum value in an array of numbers.

const maxnum = num.reduce((max, current)=> {
    return current>max ? current : max;
}, num[0]);
console.log(maxnum);

//Use map and filter together to get names of adults (age >= 18) in uppercase.
const adultNameupper = user.filter(users => users.age>18).map(users => users.name.toUpperCase());
console.log(adultNameupper);

//Use forEach to build an HTML unordered list string from an array of item
const items =[ "home", "about", "conract", "number"];
// iniatializing the string 
let htmllist = "<ul>";
items.forEach(item => {
htmllist += `<li>${item}</li>`;    
});
 htmllist += "</ul>";
 console.log(htmllist);