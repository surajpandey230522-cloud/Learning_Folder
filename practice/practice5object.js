let user={
  name:"suraj",
  age:21
};

//let key="name"

//using loop......................................
for(let key in user){
    //console.log(key)
    //console.log(user[key])
}
//console.log(user[key])

//................................................

let student={
    name:"suraj",
    age:17
}

if(student.age>=18){
    //console.log("Eligible")
}
else{
    //console.log("not Eligible")
}

//.............................................


let students = [
    { name: "Suraj", age: 10 },
    { name: "Rahul", age: 11 },
    { name: "Aman", age: 19 }
];

for(let num of students){

    if(num.age>=18){
        console.log(num.name)
    }
    // let add=student.name.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
    // console.log(add)
}
