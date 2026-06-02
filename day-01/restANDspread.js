let numbers =[1,2,3,4,4]
console.log("with out spreading:",numbers)
console.log("with spread operator:", ...numbers)

// rest and spread operator(...)
//merged two array
 let maxNums=[789,678]
 let mergedArr =[...numbers,...maxNums]
 console.log(" merged array:", mergedArr)

 //rest example

 let add =(...values)=>{
    let res = values.reduce(
        (accumulator,ele)=>{
            return accumulator + ele
        },
        100//initial value of accumulator '


    )
    console.log("add result:",res)
 }
 add(...numbers)
 add(34,45,1,2,3,45,4)``

 //spread in object
 let obj1={
    name:"Ram parasad",
     age: 23,
 }
 let obj2= {
    school: "abc school",
    favsub:"c",
 }
  
 let mergedobj={ ...obj1, ...obj2}
    console.log("merged obj:", mergedobj)
 