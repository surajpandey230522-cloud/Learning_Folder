let name="ultratech"
let num=45;
//console.log(`My company is ${name} and these are ${num} years old and i am head of employee`)

// `` => string interpulation

const gameName=new String('suraj')
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("r"))
console.log(gameName.toLowerCase())

const newstring=gameName.substring(0,4)
console.log(newstring)

const anotherString=gameName.slice(-4,2)
console.log(anotherString)

const newstringOne="  suraj  "
console.log(newstringOne.trim())

const url='https://suraj.com/suraj%20pandey'

let sum=url.replace("%20","_")

console.log(sum)

console.log(gameName.split('-'))

