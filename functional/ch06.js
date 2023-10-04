const ages = [32, 6, 19, 13];

const adultAge = ages.filter(age => age >= 19);

const kidsAge = ages.filter(age => age < 7);

const teensAge = ages.filter(age => age >= 13 && age <= 18);

console.log(adultAge);

console.log(kidsAge);

console.log(teensAge);

const students = [
  { name: 'John', age: 19, money: 5000 },
  { name: 'Jane', age: 31, money: 7000 },
  { name: 'Smith', age: 24, money: 3000 },
  { name: 'Mary', age: 18, money: 1500 },
];

const adultStudents = students.filter(student => student.age >= 19);

const richStudents = students.filter(student => student.money >= 5000);

console.log(adultStudents);

console.log("부자인 학생:", richStudents);