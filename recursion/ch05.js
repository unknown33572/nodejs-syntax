const scores = [80, 90, 100];

const sum = (arrayList, scoresTotal, arrayLength) => {
  if(arrayList.length === arrayLength) return scoresTotal;
  return sum(arrayList, scoresTotal + arrayList[arrayLength], arrayLength + 1);
}

console.log(sum(scores, 0, 0)) // 리스트, 합계시작, 리스트길이