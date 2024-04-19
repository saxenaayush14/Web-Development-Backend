//Tutorial of creating server using Node js

const http = require('http');
const fs=require("fs");
const filecontent=fs.readFileSync('ayush.txt');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text');
  debugger;
  res.end(filecontent);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});