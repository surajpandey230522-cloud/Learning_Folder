let name ="suraj pandey";
let age ="21";

console.log(`This is your ${name}`);
console.log(`This is your ${21}`)

//1.basic node js ..................................................checking version and platform...
console.log(process.version);
console.log(process.platform);

//2. module...............
//in which i have two file  no one file i write the mathod and no second  for perform the output .


//File system........................................

const fs=require("node:fs")

 fs.writeFileSync("notes.txt", "learning Node.js");

const data = fs.readFileSync("notes.txt", "utf8");

console.log(data)



