/* --------------------------------
input
2
3

-------------------------------- */
/* --------------------------------
output
6

-------------------------------- */

/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
const main = () => {
  const num1 = lines[0];
  const num2 = lines[1];
  const kakesan = num1 * num2;
  console.log(kakesan);

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
