//Learning the async function for write a scalable code 

async function getData(a,b) {
    let promise = new Promise(resolve => {
        sum=a+b
        setTimeout(() => {
            resolve(sum);
        }, 2000);
    });

    let result = await promise;

    console.log(result);
}

//getData(1,2);



async function myCart(params) {
    let promise1=new Promise (resolve =>{
        let myName="suraj pandey"
        //setTimeout(()=>{
            resolve(myName)
        //},2000);
    });
    let data= await promise1;

    console.log(data)
};
//myCart()
 


//api.......................POST recuest.................call with async awit function....................................


async function sendData() {
    try{
    let response= await fetch("",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            Name:name,
            Age:age
        }),

    }
);

let data=await response.json()
console.log(data)
    }
    catch(error){
        console.log(error.massage)
    }


}


sendData();


//api ....call with promise normal funtion.......POST request..............................//

function postData(){
    fetch("",{
        method:"POST",
        headers:{
            "Content-Type":"apllication/json"
        },
        body:JSON.stringify({
            Name:"suraj",
            Age:21
        }),
    }).then(response=>{
        if(!response.ok){
            throw new Error("Error"+response.status)
        }
        return response.json();
    })
    .then(data=>{
        console.log(data)
    }).catch(error=>{
        console.log(error.massage)
    })
    
}
postData()



//api ...................get request ...........through..async mathod....................//


let name=document.getElementById("sum")

async function myCart(){
 let id=name.value
 let response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

 if(!response.ok){
    throw new Error("Error",response.status)
 }

 let data=await response.json()
 console.log(data)
}

myCart();


//api get request by promise mathod.........................................................

let id1=document.getElementById("sam")
function myTool(){
    let id2=id1.value
    fetch(`https://jsonplaceholder.typicode.com/users/${id2}`)
    .then(response=>{
        if(!response.ok){
            throw new Error("Error"+response.status)

        }
        return response.json();

    }).then(data=>{
        console.log(data)
    }).catch(error=>{
        console.log(error.massage)
    });
};