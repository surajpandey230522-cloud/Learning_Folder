//Data Type) Primitive : Number,String,Boolean,Null,Symbol,BigInt,undefined


// const score=100
// const anotherscore=100.1

// const tempreture=null
// const userEmail=0;

// const Id=Symbol("123")
// const anotherId=Symbol("123")

// console.table(Id===anotherId)

// console.log(Id)
// console.log(anotherId)

// let BigNumber=3475873245734597398n
// console.log(BigNumber)
// console.log(typeof BigNumber)

//Referance(Non-primitive):Array,Function,Object

// let box=["suraj","Adarsh","utsav"]

// let dataId={
//     name:"suraj",
//     rollno:2,
//     mark:2
// }

// function myId(){
//     console.log("ashoka")
// }
// myId();

// console.log(dataId)
// console.log(box)

//...........................................................................................

//stack memory(primitive)or Heap memory(non-primitive)



let data="surajpnadey"
let stack=data
stack="Adarsh Pathak"

console.log(stack)


let userOne={
    email:"suraj@google.com",
    upi:'suraj@ybl'
}

let userTwo=userOne

userTwo.email="adarsh@google.com"

console.log(userOne)
console.log(userTwo.email)