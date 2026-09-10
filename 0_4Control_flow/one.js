//if
let n=5
if(n!=5){
    console.log("executed")
}
else{
    console.log("error")
}

let score=200
if(score>100){
    const power="website"
    console.log(`the output ${power}`)
}else{
    console.log("error")
}

//loop..........................................................

for(index=0;index<Array.length;index++){
    const element = index
    console.log(element)
    if(element==5){
        console.log("5 is the best num")
    }
    console.log(element)
}

for(i=0;i<=10;i++){
    console.log(`outer loop value ${i}`)
    for(j=0;j<=10;j++){
        console.log(`inner loop value ${j} and inner loop ${i}`)
        console.log(i+"*"+j+ "="+ i*j )  // these mathod use to create a table
    }
}

//...................................

for(i=0;i<=20;i++){
    if(i==5){
        console.log(`detected 5`)
        continue
    }
    console.log(`log of i is ${i}`)
}