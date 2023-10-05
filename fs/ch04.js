const fs = require('fs');

const list = ['java', 'python', 'rust', 'c++', 'c#'];

function appendFileFunc(index) {
  if(index < list.length) {
    const item = list[index];
    fs.appendFile('./ch01.txt', `hello ${item}\n`, (err) => {
      if(err) {
        console.error(err);
      } else {
        console.log(`${item} 완료`);
      }
      appendFileFunc(index + 1);
    });
  }
}

appendFileFunc(0);