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

getData(1,2);