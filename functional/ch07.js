const list = [ 1, 2, 3, 4, 5 ];

const multipledList = list.map(item => item * 2); // map()은 transForm function을 매개변수로 받아서 새로운 배열을 만듦.

console.log(multipledList);

const listEmployees = [
  { name: 'shin', age: 20, salary: 1000 },
  { name: 'lee', age: 30, salary: 2000 },
  { name: 'park', age: 40, salary: 3000 },
  { name: 'kim', age: 50, salary: 4000 },
];

const listSalariesTax = listEmployees.map(employee => employee.salary * 0.1);

listSalariesTax.forEach(function(salaryTax) {
  return console.log('salaryTax : %d', salaryTax); // forEach()는 배열의 각 요소에 대해  반복적으로 함수를 실행함. %d는 정수, %s는 문자열, %f는 실수로 표현하는 formatted output.
});

