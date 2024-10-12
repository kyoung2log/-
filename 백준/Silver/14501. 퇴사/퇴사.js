const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [head, ...tail] = fs.readFileSync(path).toString().trim().split('\n');
const N = Number(head);
const dp = new Array(N + 1).fill(0);
const T = [];
const P = [];

for (const tp of tail) {
  const [t, p] = tp.split(' ').map(Number);

  T.push(t);
  P.push(p);
}

for (let i = N - 1; i >= 0; i--) {
  if (i + T[i] <= N) {
    // i번째 상담결정 시 최대 수익
    // 상담을 안했을 경우와, 상담을했을 경우
    dp[i] = Math.max(dp[i + 1], dp[i + T[i]] + P[i]);
  } else {
    dp[i] = dp[i + 1];
  }
}

console.log(dp[0]);
