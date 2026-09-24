const promis1=new Promise((resolve,reject)=>{
    resolve("Success!")
});

promis1.then((value)=>{
    console.log(value)
});

const promise2=new Promise((resolve,reject)=>{
    throw new Error("that is error")
});

promise2.catch((Error)=>{
    console.log(Error)
})


async function getData() {
    let response = await fetch("https://example.com");

    let data = await response.json();

    console.log(data);
}