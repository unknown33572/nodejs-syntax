const returnFunc = () => (a, b) => a + b;

const returnFunc2 = () => {
  return (a, b) => a - b;
}

const plus = returnFunc();

const minus = returnFunc2();

console.log(plus(10, 20));

console.log(minus(10, 20));