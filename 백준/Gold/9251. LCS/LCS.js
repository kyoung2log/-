const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [str1, str2] = fs.readFileSync(path, 'utf-8').trim().split('\n');

const lcs = Array.from({ length: str1.length + 1 }, () => Array(str2.length + 1).fill(0));

for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs[i][j] = lcs[i - 1][j - 1] + 1;
    } else {
      lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
    }
  }
}

console.log(lcs[str1.length][str2.length]);