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
// console.log(result)




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

// addition.forEach(element => {
//     for(let num of addition){
//         let add=num+num
//      console.log(add)
//     }
//});

//   for( let i=0; i<addition.length;i++){
//     console.log(addition[i])
//   }

// let sum=addition.reduce((accumulator,currentValue)=>accumulator+currentValue,0)

// console.log(sum)


// let largest=Math.max(...addition)
// console.log(largest)

// let evenValue=addition.filter(num=>num%2===0).length
// console.log(evenValue)

// let Num=addition.filter(num=>num>30)
// console.log(Num)


//while loop.....................................//
//1to 10 in simple way
 
// i=1
// while(i<=10){
//     console.log(i)
//     i++
// }
  
//by using array

//let arr=[1,2,3,4,5,6,7,8,9,10]

// index=0
// while(index<arr.length){
//     console.log(arr[index])
//     index++;
// }

//10 to 1.......

// index=arr.length-1;
// while(index>=0){
//     console.log(arr[index])
//     index--;
// }

// i=0
// while(i<=100){
//     console.log(i)
//     i++
// }


// let fruit=["mango","banana","kivi","apple"]

// let i=0
//  while(i<fruit.length){
//     console.log(fruit[i])
//     i++
//  }



//by do  while
//  i=1
// do{
//     console.log(i)
//     i++
// }while(i<=50)

//for of use .....

let arrr=[5,10,15,20,25]

// for(let num of arrr){
//   console.log(num)
// }

for(let num of arrr){
    let sum=arrr.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
    //console.log(sum)
}

let listarr=["A","B","C","D"]

for(let x in listarr){
    //console.log(x)
}   // its output is giving index this array


let alp=["A","B","C","D"]

for(let x in alp){
    //console.log(alp[x])
}


//...............................................


let Arr1 = [1, 2, 4, 5, 6];
let Arr2 = [2, 4, 7, 8, 6];

let result1=[]

for(let num of Arr1){
    if( Arr2.includes(num)&& !result1.includes(num))
    {
        console.log(num)
    }
}