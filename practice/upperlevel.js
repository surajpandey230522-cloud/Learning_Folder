//class ..........................................................................


class student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        console.log(`my nmae is  ${this.name}`)
        console.log(`my age is ${this.age}`)
    }
}

let s1= new student("suraj",21)
let s2= new student("adarsh",21)

// s1.introduce()
// s2.introduce()


//closure.............

function name(){
    let sd="suraj"

    function mysd(){
        console.log(sd)
    }
    return mysd;
}

let result=name();

result();


