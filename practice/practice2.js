// const promis1=new Promise((resolve,reject)=>{
//     resolve("Success!")
// });

// promis1.then((value)=>{
//     console.log(value)
// });

// const promise2=new Promise((resolve,reject)=>{
//     throw new Error("that is error")
// });

// promise2.catch((Error)=>{
//     console.log(Error)
// })


// async function getData() {
//     let response = await fetch("https://example.com");

//     let data = await response.json();

//     console.log(data);
// }



let arr1=[1,2,2,3,4,5]
let arr2=[2,2,4,5,5,6]

let result=[]

for(let num of arr1 ){
    if(arr2.includes(num) && !result.includes(num))
        result.push(num)
   
}
 console.log(result)