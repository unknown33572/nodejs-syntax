const promiseFirst = new Promise(resolve => resolve(1))
  .then(result => `${result + 10}`);

const promiseSecond = new Promise(resolve => resolve(2))
  .then(result => `${result + 20}`);

Promise.all([promiseFirst, promiseSecond]) // [ '11', '22' ]
  .then((result) => {
    console.log('result:', result);
    console.log('sum:', Number(result[0]) + Number(result[1])); // 11 + 22 = 33
  });