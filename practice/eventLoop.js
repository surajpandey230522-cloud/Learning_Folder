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


//................................Then().........................................


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

//.............................catch()..........................................


let promise = new Promise(function(resolve, reject) {

    reject("Something went wrong");

});

promise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });


    //finally().............................................................//


    let promise = new Promise(function(resolve, reject) {

    resolve("Success");

});

promise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log("Promise finished");
    });



//     | Method          | Purpose         |
// | --------------- | --------------- |
// | `new Promise()` | Create Promise  |
// | `resolve()`     | Success         |
// | `reject()`      | Failure         |
// | `.then()`       | Handle success  |
// | `.catch()`      | Handle error    |
// | `.finally()`    | Runs at the end |


//for resolve and reject/..........like success and failure.................................................................


let promise = new Promise(function(resolve, reject) {

    let age = 20;

    if (age >= 18) {
        resolve("You are eligible");
    } else {
        reject("You are not eligible");
    }

});

promise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

//promise changing...................................................................//


    Promise.resolve(10)
    .then(function(num) {
        return num * 2;
    })
    .then(function(num) {
        return num + 5;
    })
    .then(function(result) {
        console.log(result);
    });


    //fetching api.......................................................//

    fetch("https://example.com/data")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });


    

//                  Promise
//                 ↓
//           ┌───────────┐
//           │  Pending  │
//           └─────┬─────┘
//                 ↓
//        ┌────────┴────────┐
//        ↓                 ↓
//    resolve()          reject()
//        ↓                 ↓
//   Fulfilled           Rejected
//        ↓                 ↓
//     .then()          .catch()