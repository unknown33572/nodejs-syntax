const fs = require('fs');

const data = fs.readFileSync('./ch01.txt', 'utf8'); // 동기적으로 파일을 읽음
// const string = data.toString();
// console.log(string);
console.log(data);

fs.readFile('./ch01.txt', 'utf8', (err, data) => { // 비동기적으로 파일을 읽음
  if(err) throw err;
  console.log(data);
});
