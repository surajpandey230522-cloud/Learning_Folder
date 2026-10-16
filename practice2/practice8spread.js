//this is called a spread operator ............................
//with array..
let arr=[1,2,3,4,5]
let arr1=[6,7,8,9,10]
//console.log(...arr,...arr1)

//with object................

let port={
    name:"suraj",
    age:21
}

let port1={
    ...port,
    course:'b.tech'
    
}

//console.log(port1)


//rest operator......................................



function student(name,age,...subject){
// console.log(name)
// console.log(age)
// console.log(subject)
}
student("suraj",21,"python","java")



