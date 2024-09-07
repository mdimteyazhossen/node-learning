const http=require('http');
const fs=require('fs');
const PORT=process.env.PORT;
const hostName='127.0.0.1';

const handleReadFile=(res,req,fileName,statusCode) => {
    fs.readFile(fileName,"utf-8",(err,data) => {
        if (err){
         console.log(err);
        } 
        else{
         res.writeHead(200,{'content-type':'text/html'});
         res.write(data);
         res.end();
        };
     });

}

const server = http.createServer((req,res)=>{
    if(req.url=== "/"){
        handleReadFile(res,req,"index.html",202)
    }
    else if(req.url=== "/about"){
        handleReadFile(res,req,"about.html",202)
    }
    else if(req.url=== "/contact"){
        handleReadFile(res,req,"contact.html",202)
    }
    else{
        handleReadFile(res,req,"404.html",404)
    }
});
server.listen(PORT, () =>{
    console.log(`server is running at http://${hostName}:${PORT}`);
});

