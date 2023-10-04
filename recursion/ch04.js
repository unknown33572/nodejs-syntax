const fibonacci = (n) => {
  if(n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2); // 2개의 recursive call을 더함
};

for(let i = 1; i <= 10; i += 1) { // 정해진 횟수만큼 반복하며 i 중첩
  console.log(fibonacci(i));
}