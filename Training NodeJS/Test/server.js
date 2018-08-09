const http = require('http');
const fs   = require('fs');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('./views/home.html',(err,data)=>{
      if (err) {
        res.writeHead(404);
        res.write('File not found');
      } else {
        res.write(data);
      }
      res.end();
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});