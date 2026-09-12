let a=[1,2,3,4,5,6,7,8,9,10]

const myArray=a.filter((num)=>{
    return num>4
})

console.log(myArray)

let b=[1,2,3,4,5,6]

const mynew=b.map((value)=>{
    return (value)*2
})
console.log(mynew)

let c=[1,2,3,4,5,6,7,8,9]

let initial=0

const newArray1=c.reduce((accumalator,currentvalue)=> accumalator+currentvalue,initial,)

console.log(newArray1)