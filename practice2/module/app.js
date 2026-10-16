import {add,sub} from "./math.js";
import { myData } from "./math.js";
setTimeout(()=>{
console.log(add(3,4))
},2000)
setTimeout(()=>{
console.log(sub(5,2))
},3000)

myData()
//is called module where we create saperate file for other other steps of code


//C. Higher-order functions

function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(calculate(5, 3, add));      // 8
console.log(calculate(5, 3, multiply)); // 15


