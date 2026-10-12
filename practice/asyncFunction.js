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
myCart()
 