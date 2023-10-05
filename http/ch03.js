require('http').createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('hello world');
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});