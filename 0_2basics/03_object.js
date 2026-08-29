
//object leterals

const mysym=Symbol("key1")

const Jsobject={
    name:"suraj",
    room:123,
    [mysym]:"key1",
    address:"varansi",
    email:"suraj@google.com",
    num:437625,
    "fullname":"surajpandey"
}

console.log(Jsobject["num"]) //here object provide output in string form
console.log(Jsobject)
console.log(Jsobject.fullname)
console.log(Jsobject[mysym])

///for change value of any key

Jsobject.name="adarsh"
console.log(Jsobject)
Object.freeze(Jsobject)

Jsobject.greeting=function(){
    console.log("hellow world")
}
console.log(Jsobject.greeting)