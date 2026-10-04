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

//map()....................................................................................................................//
//in this we make a new array form
//function..
let qwerty=[1,2,3,4,5,5,6,7]

let yt=qwerty.map(function(num){
    return num *2
})
//console.log(yt)

//arrow function...

let you=[1,2,3,4,5,6,7,8,9]
let result=you.map((num)=>num+1)

//console.log(result)


//with string..

let text=["mango","banana","lichi"]

let change=text.map(name=>name.toUpperCase())
///console.log(change)


//write string with index...............


let fruit=["apple","mango","banana"]

let result1=fruit.map((fruit,index)=>{
    return index +":"+fruit;
});
//console.log(result1)



// let students = [
//     { name: "Suraj", age: 21 },
//     { name: "Rahul", age: 22 },
//     { name: "Aman", age: 20 }
// ];

//let result2=students.map(students=>students.name)
//console.log(result2)

// for(let num of students){
//     let save=num.name
//     console.log(save)
// }

//for each...............  in this form we can't make array form aonly execute one by one each line to perform our logic...//


//let result3=students.forEach(students=>{
    //console.log(students.name)
//})





//Filter()............................................................//


let KGF=[1,2,3,4,5]

let value=KGF.filter(num => num>2)
//console.log(value)


let Man=[
    {name:"suraj",age:20},
    {name:"aman",age:21},
    {name:"adarsh",age:17}
 ]

let result4=Man.filter(num => num.age>=20)
//console.log(result4)

//note:- filter  bring arrray form only or when we bring an object then we will be leave in form of array in object



//Reduce............................................................//


let num=[1,2,333,5,45,46,65]

// let wt=num.reduce((num,total)=>num+total,0)

// console.log(wt)

//max num find................//
let qt=num.reduce((max,num)=>{
    if(num>max){
        return num
    }
    return max;
},0)
console.log(qt)