const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><body><h1>Hello, World!</h1></body></html>');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

const testClose = () => {
  server.close(() => {
    console.log('Server closed');
  });
};

// setTimeout(testClose, 5000); // 5초 후에 서버 종료