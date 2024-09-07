const http=require("http");
const port=3010;
const hostname= '127.0.0.1';

const myServer = http.createServer((req,res) => {
    // res.end("HEllo. I am you first server.")
    res.end("<h1>Hello</h1>")
});

myServer.listen(port, ()=>{
    console.log(`Server is running successfully at http://${hostname}:${port}`)
})
