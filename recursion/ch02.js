const sumNum = (start, end, acc) => {
  if(start > end) return acc;
  return sumNum(start + 1, end, acc + start);
};

console.log(sumNum(1, 10, 0));