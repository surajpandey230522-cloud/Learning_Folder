const web =()=>{
    const Mycart="suraj pandey"
   console.log(Mycart)
}
//web()


const mySite=()=>{
    const text="suraj handsome boy"
    console.log(`${text} and he is very importent `)
    mySite.text="suraj pandey"
    console.log(`${text} and he's good`)
}
//mySite()


const addTo =(num1,num2)=>{
    return num1+num2
}
//console.log(addTo(34,45))

const head =()=>{
let username="suraj pandey"
//console.log(this)
}
head()

let num1=34
let num2=32

const number=(num1,num2)=> (num1+num2)
//console.log(number(23,23))

const mylist=[1,2,3,3,4,65,5,6606]
mylist.forEach(element => {
    const name="suraj pandey"
    //console.log(mylist)
});

//,.................................................................

//IIFE..
(function (){
    //console.log("hellow")
})//();


(function (){
    const website="flipkart"
    function other(name){
     console.log(name `${website}`)
    }
    other("welcome adarsh on")
})//();


//...............................

// (function () {
//     let secret = "12345";

//     console.log(secret);
// })//();

//console.log(secret); // Error


//( (name)=>{
  //  console.log(`${name} is problem solver `)
//})//("suraj");


//file handling
const fs = require("fs");
let data = fs.readFileSync("student.txt");
console.log(data);