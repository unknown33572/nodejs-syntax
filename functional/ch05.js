/*
function isApple(fruit) {
  if(fruit === 'apple') {
    return true;
  } else {
    return false;
  }
}

const isApple = (fruit) => {
  if(fruit === 'apple') return true;
  return false;
}
*/


const isApple = (fruit) => fruit === 'apple'; // predicate function

console.log(isApple('apple')); // true

console.log(isApple('watermelon')); // false

const numbers = [5, 2, 3, 10, 4];

const isFirstBiggerThanSecond = (first, second) => first - second;

const sortedNumbers = numbers.sort(isFirstBiggerThanSecond); // sort()는 predicate function을 매개변수로 받아서 정렬을 해줌. 양수이면 앞으로, 음수이면 뒤로 스왑.

console.log(sortedNumbers);