function test(x) {
    x = x + 10;
    return x;
}

let a = 20;

// console.log(test(a));
// console.log(a);

//.......................................................................

function outer() {

    let x = 10;

    function inner() {
        console.log(x);
    }

    //inner();
}

//outer();

let arr=[1, 2, 2, 3, 4, 4, 5, 5]
let remove=removeDuplicates(arr);
console.log(remove)