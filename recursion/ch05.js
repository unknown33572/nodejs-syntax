const scores = [80, 90, 100];

const sum = (arrayList, scoresTotal, arrayLength) => { // 합
  if(arrayList.length === arrayLength) return scoresTotal;
  return sum(arrayList, scoresTotal + arrayList[arrayLength], arrayLength + 1);
}

console.log(sum(scores, 0, 0)) // 리스트, 합계시작, 리스트길이

const avg = (arrayList, scoresTotal, arrayLength) => { // 평균
  if(arrayList.length === arrayLength) return scoresTotal / arrayList.length;
  return avg(arrayList, scoresTotal + arrayList[arrayLength], arrayLength + 1);
}

console.log(avg(scores, 0, 0)) // 리스트, 합계시작, 리스트길이