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


//Debouncing/throttling.....................

function debounce(callback,delay){
let Timer;
return function(...args){
    clearTimeout(Timer);

    Timer=setTimeout(()=>{
        callback(...args)
    },delay)

}
}


    function search(value){
        console.log("Searching :",value)
    }

    let debouncedSearch= debounce (search,500)

    debouncedSearch("j")
    debouncedSearch("java")

    debouncedSearch("java src")
    debouncedSearch("java scripts")

    //throttling......................................................

    function throttle(callback, delay) {
    let waiting = false

    return function (...args) {
        if (waiting) return;

        callback(...args);
        waiting = true;

        setTimeout(() => {
            waiting = false;
        }, delay);
    };
}

function handleScroll() {
    console.log("Scroll event handled");
}

const throttledScroll = throttle(handleScroll, 1000);

console.log("scroll", throttledScroll);