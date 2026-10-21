
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to Home Page");
    } 
    else if (req.url === "/about") {
        res.end("This is About Page");
    } 
    else if (req.url === "/contact") {
        res.end("This is Contact Page");
    } 
    else {
        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});


//.......................................................................


let http=require("node:http")

const server=http.createServer((req,res)=>{
res.end("hello from my server ")
});
server.listen(3000,()=>{
    console.log("server running on port 3000")
})