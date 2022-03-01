/* --------------------------------
input
2 3

-------------------------------- */
/* --------------------------------
output
5

-------------------------------- */

/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
const main = () => {
  let a = [];
  let smallest = parseInt(lines[0]);
  for (let i = 0; i < 5; i++) {
    const line = parseInt(lines[i]);
    if (line < smallest) {
      smallest = line;
    }
  }
  console.log(smallest);

  // 空行
  console.log('');
};

/**
 * 標準入出力のための処理
 */
const reader = require('readline');

process.stdin.resume();
process.stdin.setEncoding('utf8');
const rl = reader.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', main);
