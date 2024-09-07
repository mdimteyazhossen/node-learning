const http=require('http');
const fs= require('fs');
const PORT = 3000;
const HostName = '127.0.0.1';
const server=http.createServer((req,res) => {
const hendlename=(statusCode,filelocation)=>{
    fs.readFile(filelocation, (err,data) => {
        res.writeHead(statusCode,{'content-type':'text/html'});
        res.write(data),
        res.end();
    })

}
    
    if( req.url === '/'){
        hendlename(200,"./views/index.html");
    }
    else if( req.url === '/about'){
        hendlename(200,"./views/about.html");
    }
    else if( req.url === '/contact'){
        hendlename(200,"./views/contact.html");
    }
    else{
        hendlename(404,"./views/error.html");
    }
});

server.listen(PORT,HostName, () => {
    console.log(`server is running at http://${HostName}:${PORT}`);
})