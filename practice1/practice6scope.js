//globle scope..............................................//

let myName="suraj pandey"

function scopes(){
    //console.log(myName)

    
}

scopes()
//console.log(myName)


//function scope..................................................//

function qwerty(){
   // var name="suraj"

    //console.log(name)
}
qwerty()
//console.log(name)

//block scope...................................................//

if(true){
    var age=21
    //console.log(age)
}
//console.log(age)

//........................................................

let name = "Suraj";

function store() {
    let shop = "YouTube";

    function shopping() {
        //console.log(name); // 
        //console.log(shop); // 
    }

    shopping();

    //console.log(name); // 
}

store();

//console.log(name); // 
//console.log(shop); // //



//destructuring..................
//with array....
let fruits = ["Apple", "Banana", "Mango"];

let [fruit1, fruit2, fruit3] = fruits;

// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);


//with object............................


let student = {
    name: "Suraj",
    age: 21,
    course: "JavaScript"
};

let{ name:studentName,age:studentAge,course:studentCourse }=student;

console.log(studentName)
console.log(studentAge)
console.log(studentCourse)