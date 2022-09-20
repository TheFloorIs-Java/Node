// equivalent to import
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
// equivalent to the ctx lambda expression in javalin
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello header</h1><p>This is a html page delivered by a server</p>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});