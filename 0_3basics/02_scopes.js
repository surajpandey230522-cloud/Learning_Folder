// let a=10
// const b=20
// var c=23
// console.log(a,b,c)

var myList={
    id:23,
   rollno:108
}
function newStore(myObject){
 return myObject
}
//console.log(newStore(myList))
//............................................................................
let a=200
if(true){
    let a=10
const b=20
var c=23
console.log("inner",a)
}
console.log(a)
//console.log(b)
//console.log(c)