const fs = require('fs');

const contents = 'Hello javascript';

fs.writeFile('./ch01.txt', contents, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});