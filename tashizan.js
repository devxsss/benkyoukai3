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
  const line = lines[0].split(' ');
  const num1 = parseInt(line[0]);
  const num2 = parseInt(line[1]);
  const tashizan = num1 + num2;
  console.log(tashizan);

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
