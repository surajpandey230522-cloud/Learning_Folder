let score = "34";

//console.log(typeof(score))
//console.log(typeof score)


let numberId=Number(score)
//console.log(typeof numberId)
//console.log(numberId)


//"24231" =>  24231.
//"231abc"=> NaN
// true=> convert in 1
// false=>  convert in 0


let isLoggedIn = "123numbber";

let BooleanIsloggedIn=Boolean(isLoggedIn)
//console.log(BooleanIsloggedIn)
//console.table([typeof(score),typeof numberId,numberId,BooleanIsloggedIn ])

// 1 => true
// 0 => flase
// ""=> false
// "surajpandey"=true

let sum =33;
let sumId=String(sum)
//console.log(sumId)
//console.log(typeof sumId)
//console.table([sumId,typeof sumId])


//***********************operatons************************************* 

let str1 = "suraj"
let str2= "pandey"
str3=str1+str2
console.log(str3)


// let a =12
// let b=23
// let d="36"
// let c=a+b+d
// console.log(c)

// console.log("1"+2) // concatination
// console.log(1+"2")
// console.log("1"+2+2+2+3+4+5)// when the first num are string then in our outout concatination conversion 
// console.log(1+2+"2"+2+3+"3") // when the first num are number and second or third num are string then the distance between start num and start string will be added and then all num should be concatinated

console.log(+true)  //+true =>  1
console.log(+"")    // true => true
                    //+""  => 0
                    // false=> false

// let gameCounter=100;
// ++gameCounter;
// console.log(gameCounter)

let x = 3;
const y = x++;


console.log(`x:${x}, y:${y}`); 
//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);//
// Expected output: "a:4, b:4"
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.