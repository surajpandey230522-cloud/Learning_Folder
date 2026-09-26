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




 let list=[1,2,3,4,5,6,7,8,9,10]

//  for(index=list.length-1;index>=0;index--){
//      console.log(list[index])
//  }
// for(let n in list){
// for(index=0;index===n%2;index++){
//  console.log(list[index])
// }
// }

// for(i=0;i<=list.length;i++ ){
//     if(i%2===0){
//     console.log(list[i])
//     }
// }


let addition=[10,20,30,40,50,60]

addition.forEach(element => {
    for(let num of addition){
        let add=num+num
     console.log(add)
    }
   
});