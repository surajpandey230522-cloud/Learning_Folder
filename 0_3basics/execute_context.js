
// Execute  Context

//{}-> globle execute context

// globle execution
//function execution
//Eval execution context

// Execute.......................

///{}->  Memory Creation Phase
//     Execution Phase--->


//1. globle execution

//2.memory execution

let val1=10
let val2=5
function addnum(num1,num2){
  let total=num1+num2
  return total
}
let result1=addnum(val1,val2)
let result2=addnum(10,5)

console.log(result1)
console.log(result2)
//a.val1=undefined
//b.val2=undefined
//c.addnum=defination
//d.result1=undefined
//e.result2=ndefined


// .....Execution phase

//1.val1=10
//2.val2=5
//3.addnum=  [new varoable envoirment + execution thread]-->delet

//memory phase................................


// val1=undefined
// val2=undefined
// total= undefined

//execute context
// val1=15
// val2=5
// total=15



//[globle phase-->one(),two(),three()]

function one(){
    console.log('first execute')
}
function two(){
    console.log("second execute"
    )
}
function three(){
    console.log("third execute")
}
two()
one()
three()