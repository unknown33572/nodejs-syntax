const fs = require('fs');

const renameFile = (oldPath, newPath) => {
  fs.rename(oldPath, newPath, (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });
};

const oldPath = './ch01.txt';
const newPath = './test.txt';

renameFile(oldPath, newPath);