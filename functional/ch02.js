const multiple = x => x * 2;
const add = x => x + 5;

const addAndMultiple = x => multiple(add(x));

console.log(addAndMultiple(10)); // add -> multiple -> addAndMultiple