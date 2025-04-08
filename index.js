// const fs = require("fs");
// const dt = new Date();
// const textIn = fs.readFileSync("./data/text-in.txt","utf-8");

// fs.writeFileSync("./data/text-out.txt",`This is a new line\n ${textIn}\ncreated on ${dt.toDateString()}`)
// console.log(textIn)

const fs = require("fs");
const http = require("http");
const productData = fs.readFileSync("./data/products.json","utf-8")
const productTemplate = fs.readFileSync("./public/index.html","utf-8")

const server = http.createServer((req,res)=>{
    const pathName = req.url;

    if (pathName === "/") {
        res.writeHead(200,{
            "content-type" : "text/html"
        });
        res.end(productTemplate);
    }
    else if (pathName === "/products") {
        res.writeHead(200);
        res.end("<h1>Hello From <b>Products</b> Page</h1>");
    }
    else if (pathName === "/surtech") {
        res.writeHead(200);
        res.end("<h1>Hello From <b>Surtech</b> Page</h1>");
    }
    else if (pathName === "/api") {
        res.writeHead(200,{
            "content-type" : "application/json"
        });
        res.end(productData);
    }
    else{
        res.writeHead(404,{
            "content-type" : "text/html"
        });
        res.end("<h1>Page not found</h1>");
    }

    console.log(pathName);
});

server.listen(4000, /*,<ipAddress>,*/ ()=>{
    console.log("Listening to port number : 4000");
})