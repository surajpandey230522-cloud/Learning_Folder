function test(x) {
    x = x + 10;
    return x;
}

let a = 20;

// console.log(test(a));
// console.log(a);

//.......................................................................

function outer(){

    let x = 10;

    function inner() {
       // console.log(x);
    }

    //inner();
}

//outer();

let tutor=[1,22,3,3,4,2,2,4,55,6,7,88,8,8,9]
let tutor1=[1,23,3,4,6,7,8,34,45]
let result=[]

function qwerty(){
for(let num of tutor)
    if(tutor1.includes(num)&& !result.includes(num)){
        result.push(num)
    }
    console.log(result)
}

qwerty();


let qt=[1,2,3,3,4,5,5,6,7,6,8,6,7,9]

let duplicate=[...new Set(qt)].sort((a,b)=>b-a)
console.log(duplicate)