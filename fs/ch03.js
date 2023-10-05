const fs = require('fs');

fs.readFile('./ch01.txt', 'utf8', (err, data) => {
  if(err) throw err;
  let contents = data;
  contents = 'Hello World'; // 파일 내용을 변경
  fs.writeFile('./ch01.txt', contents, (err) => {
    if(err) throw err;
    console.log('Done!');
    const changedFile = fs.readFileSync('./ch01.txt', 'utf8'); // 파일을 읽음
    
    console.log(changedFile);
  });
});
