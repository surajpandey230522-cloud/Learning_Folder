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
console.log(loginUserName())