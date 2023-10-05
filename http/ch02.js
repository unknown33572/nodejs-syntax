const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><body><h1>Hello, World!</h1></body></html>');
  res.end();
});

server.on('request', () => {
  console.log('Request');
});

server.on('connection', () => {
  console.log('Connection');
});

server.on('close', () => {
  console.log('Close');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});