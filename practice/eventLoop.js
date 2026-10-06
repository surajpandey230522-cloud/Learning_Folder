//setTimeout..................................
//console.log("1");

setTimeout(() => {
    //console.log("2");
}, 0);

//console.log("3");



//......................this is call stack......................................

//console.log("1");

setTimeout(() => {
    //console.log("2");
}, 2000);

Promise.resolve().then(() => {
    //console.log("3");
});

//console.log("4");


//async function.............................


async function test() {

    //console.log("A");

    await Promise.resolve("success");

    //console.log("B");
}

test();

//console.log("C");


//promise..................................................

//let promise = new Promise(function(resolve, reject) {

    let success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }

//});
//console.log(promise);


//.........................................................................


// let promise1=new Promise(()=>(resolve,reject)=>{
    
//    resolve("success")
// });

// promise1.then((result)=>{
//     console.log(result)
// });


let promise = new Promise(function(resolve, reject) {

    resolve("Hello Suraj");

});

promise.then(function(result) {
    console.log(result);
});