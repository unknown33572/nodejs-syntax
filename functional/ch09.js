const students = [
  { name: 'John', age: 19, monthlySalary: 5000 },
  { name: 'Jane', age: 31, monthlySalary: 7000 },
  { name: 'Smith', age: 24, monthlySalary: 3000 },
  { name: 'Mary', age: 18, monthlySalary: 1500 },
];

const adultStudentsMonthlySalarySum = students
  .filter(student => student.age >= 19)
  .map(student => student.monthlySalary)
  .reduce((acc, monthlySalary) => acc + monthlySalary, 0);

console.log(adultStudentsMonthlySalarySum); // 19세 이상 월급 합계

const yearlySalary = students.map(student => student.monthlySalary * 12);

console.log(yearlySalary); // 연봉