//Serving html files using Node js

const http=require('http')
const fs=require('fs')
const filecontent=fs.readFileSync('node_1.html')

const server=http.createServer((req,res)=>{
   res.writeHead(200,{'Content-type':'text/html'});
   res.end(filecontent)
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("Listening on port 8000")
})