//console.log(new Date().toString())

//console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"


//console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"

let data=new Date()
// console.log(data.toString())
// console.log(data.toDateString())
// console.log(data.toISOString())
// console.log(data.toJSON())
// console.log(data.toLocaleDateString())
// console.log(data.toLocaleString())
// console.log(data.toLocaleTimeString())
// console.log(typeof data)


//let newDate= new Date(2026,0,1)
//let newDate= new Date(2026,0,1,9,5)
let newDate=new Date("2026-01-15")
// let newDate = new Date("01-15-2026")
// console.log(newDate.toLocaleString())

let myTime= Date.now()
//console.log(myTime)     //..............................................//for time 

//console.log(newDate.getTime())  //........................................given time of given date

//console.log(Math.floor(Date.now()/1000))//for find in second value it is form of milisecond


let myCreateDate = new Date()
console.log(myCreateDate)
console.log(myCreateDate.getMonth())  // our month started to 0 value so my month less than exact month 
//console.log(myCreateDate.getMonth()+1)
console.log(myCreateDate.getDay())  //find day it's correct 
console.log(myCreateDate.getFullYear())
console.log(myCreateDate.getHours())
console.log(myCreateDate.getMinutes())
console.log(myCreateDate.getMilliseconds())
console.log(myCreateDate.getDate())
//console.log(myCreateDate.getUTCDate())
console.log(myCreateDate.getTime())
console.log(myCreateDate.getTimezoneOffset())

console.log(`${myCreateDate.getMonth()} the month `)

let Getweek=myCreateDate.toLocaleString("default",{
 
    weekday:"long"
})

console.log(Getweek);