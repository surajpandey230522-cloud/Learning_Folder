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