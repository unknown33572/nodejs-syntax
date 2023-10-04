const factorial = (n) => {
  if(n === 0) return 1;

  return n * factorial(n - 1); // recursive call
};

console.log(factorial(5));