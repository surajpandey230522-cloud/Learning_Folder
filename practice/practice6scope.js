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
        console.log(name); // 
        console.log(shop); // 
    }

    shopping();

    console.log(name); // 
}

store();

console.log(name); // 
console.log(shop); // 