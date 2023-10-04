const randomScores = Math.floor(Math.random() * 100) + 1;

const scores = [];

for (let i = 0; i < randomScores; i++) {
  scores.push(Math.floor(Math.random() * 100) + 1); // push()는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환함. Math.floor()는 소수점 이하를 버림. Math.random()은 0과 1 사이의 난수를 반환함.
}

const sum = scores.reduce((total, score) => total + score, 0); // 0은 초기값. reduce()는 배열의 각 요소에 대해 반복적으로 함수를 실행하고, 하나의 결과값을 반환함.

console.log('sum : %d', sum);