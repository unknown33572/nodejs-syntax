const countdown = (value) => {
  console.log(value);
  if(value === 0) return value;
  return countdown(value - 1); // recursion
};

console.log(countdown(10));