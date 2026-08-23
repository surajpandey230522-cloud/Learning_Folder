
let newcontent=["west","north","east","south"]
//console.log(newcontent[2])
let newArray=[]

let myObject={
    name:"suraj pandey",
    age:21,
    rollno:108
}
let a=newArray.push(myObject)
//console.log(newArray)

let Array=[1,2,3,4,5,6,5,4,3,2,5,67]
//console.log(Array[3])// for find index
//console.log(Array)
// console.log(Array.includes(9))  // so output in flase
// console.log(typeof Array)
// let newArr=Array.join()
// console.log(newArr)
// console.log(typeof newArr)

//slice ; splice

console.log("A",Array)
const mya1=Array.slice(1,3)
console.log(mya1)

console.log("B",Array)
const mya2=Array.splice(1,3)
console.log(mya2)