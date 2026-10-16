// //class ..........................................................................


// class student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     introduce(){
//         console.log(`my nmae is  ${this.name}`)
//         console.log(`my age is ${this.age}`)
//     }
// }

// let s1= new student("suraj",21)
// let s2= new student("adarsh",21)

// // s1.introduce()
// // s2.introduce()


// //closure.............

// function name(){
//     let sd="suraj"

//     function mysd(){
//         console.log(sd)
//     }
//     return mysd;
// }

// let result=name();

// result();


//prototype..................................................................

function qwerty(name){
    this.name=name
}

qwerty.prototype.study=function(){
    console.log(`${this.name} is studying`)
}
let s1=new qwerty("suraj")
let s2= new qwerty("adarsh")

s1.study()
s2.study()

//prototype with class....................................

class student{
    constructor(name){
        this.name=name
    }
    learn(){
        console.log(`${this.name} is learning`)
    }

}
let student1=new student("suraj")

student1.learn();


class data{
    constructor(age){
    this.age=age
    }
    Age(){
        console.log(`${this.age} older`)
    }
}

let ag=new data(87)
ag.Age()



