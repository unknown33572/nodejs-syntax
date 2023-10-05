const fs = require('fs');
const http = require('http');
http.createServer((req, res) => {
  fs.readFile('./sample/sample.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });

}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

http.createServer((req, res) => {
  fs.readFile('./sample/nodejs_logo.png', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(data);
  });
}).listen(3001, () => {
  console.log('Server running at http://localhost:3000');
});