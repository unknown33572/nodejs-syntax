const multiple = x => x * 2;
const add = x => x + 5;

const addAndMultiple = x => multiple(add(x));

console.log(addAndMultiple(10)); // add -> multiple -> addAndMultiple

const plus = (x, y) => x + y;
const minus = (x, y) => x - y;

console.log(plus(15, minus(10, 5))); // minus -> plus