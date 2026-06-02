//Create an array colors with 5 color names and log the third element
let color= [
    "blue", "black","red","grreen","purple"
];
console.log(`color at third : ${color[3]}`);

//Create an object book with properties title, author, pages, and publishedYear.
let book ={
    title:"harry poter",
    pages:9000,
    pages:320,
    publishyear: 2040,
};
//Add a new property isRead: true to an existing book object immutably (return new object).
let updatebook ={
    ...book,
    isRead: true
} ;
console.log(updatebook);
//Create an array of 3 objects, each representing a student with name and grade.#
let student=[{
    name: "kushal", grade: 12},
    {name: "bella", grade: 13},
    {name:"hari", grade :14}
    
];
console.log(student);
//Create a nested object company with properties name, location, and employees (an array of names).
let company={
    name:"tesla",
    location:"kathmandu",
    employee: ["kushal","dhungel","haari"]
};

//From an array numbers = [10, 20, 30], create a new array with each value increased by 5 immutably.
let numbers=[10,20,30];
//creating a new array adding 5 to each elemant of previous array
let increasednum = numbers.map(a=>a +5 );
console.log(increasednum);
//Create an object car and add a new property color immutably.
let car={
    name:"mustang",
    model:"Camry",
    year:1964
    
};
// 2. Add the 'color' property immutably (returns a brand-new ob
let updatecar={
    ...car,
    color:"silver"
};
console.log(updatecar);
//Create an array shoppingList and add a new item at the beginning immutably.
let list=["orange","apple","banana","mango"];
let updatelist=[ "kiwi",...list];
console.log("initial list  "+list)
console.log(updatelist);

//Create an object profile with nested address object containing city and country.
let profile={
    username:"kushal",
    email:"dhungelkushal94@gmail.com",
    adderess:{ city:"kathmandu", country:"nepal"}
};
console.log(profile);
//From an array of objects products, create a new array with only name and price properties.
const products=[
    {
        id:101, name:"kushal", price:999, catogery:"electronics",
    },
    { id:202, name:"Dhungel", price:111, catogery:"stuffs",},
    {id:101, name:"kus-hal", price:999, catogery:"electronics",}
];
// 2. Use map() to extract only 'name' and 'price'
const productSummarires=products.map(product=>({
    name: product.name,
    price: product.price,
}));
console.log(productSummarires);





