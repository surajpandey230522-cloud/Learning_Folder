
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

//let Array=[1,2,3,4,5,6,5,4,3,2,5,67]
//console.log(Array[3])// for find index
//console.log(Array)
// console.log(Array.includes(9))  // so output in flase
// console.log(typeof Array)
// let newArr=Array.join()
// console.log(newArr)
// console.log(typeof newArr)

//slice ; splice

// console.log("A",Array)
// const mya1=Array.slice(1,3)
// console.log(mya1)

// console.log("B",Array)
// const mya2=Array.splice(1,3)
// console.log(mya2)


// part 2......................................................................................................................
const myHeros=["ironman","hulk","capton"]
const villen=["loki","thynos"]

// myHeros.push(villen)
//console.log(myHeros)// it is return value single array where that array are  store in other array 

const allHeros=myHeros.concat(villen) /// it is return value in a new array 
//console.log(allHeros)

const all_new_array=[...myHeros,...villen]
//console.log(all_new_array)  //given the spred value 


const another_array=[1,23,4,[3,4,5],56,[3,7,8,[8,7,9]]]

const real_array=another_array.flat(Infinity)///it is use to diffrent types of array convert in single array
//console.log(real_array)
//,......................................................
console.log(Array.isArray("suraj"))
console.log(Array.from("suraj"))

console.log(Array.from({name:"suraj",rollno:108}))//interesting...  it is return emty value

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
