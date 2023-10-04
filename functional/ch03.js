const add = x => y => x + y;

console.log(add(5)(10));

const valueOfAdd = add(5);

console.log(valueOfAdd(10));

console.log(add(10)); // [Function: y => x + y] 이기 때문에 매개변수 x에만 값이 들어가고 y는 들어가지 않아 제대로 된 값이 나오지 않음.