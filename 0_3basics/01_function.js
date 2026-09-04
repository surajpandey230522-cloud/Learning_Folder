// function myClass(){

//     setTimeout(()=>{
//          console.log("my name is suraj")
//     },2000)
  
// }
// myClass()

// //....................................................................

// function addTonum(a,b){
//     let result= a+b
//     return result ;
// }
// const result=addTonum(2,34)
// console.log("Result:",result)

//....................................................................

function loginUserName(username="suraj"){
    // if(username===undefined){
    //     console.log("please enter a user")
    //     return
    // }
    if(!username){
        console.log("please enter s user")
        return
    }
    return `${username}....just logged in`
}
//console.log(loginUserName())

//...............................................................................

function calculartePrice(val1,val2,...num1){
    return num1
}
console.log(calculartePrice(200,300,400,20000000))


const myList={
    name:"suraj",
    id:45
}

function newList(anyObject){
console.log(`user name is ${anyObject.name} and id is ${anyObject.id}`)
}

newList({
    name:"suraj pandey",
    id:45
})

//with array...............

const array=[200,600,500,400,800]

function introArray(newArray){
    //return newArray[3]
    return newArray;
}

//console.log(introArray(array))

console.log(introArray([100,400,500,6000,6308,654]))