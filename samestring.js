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
  let string1 = lines[0];
  let string2 = lines[1];
  if (string1 === string2) {
    console.log('OK');
  } else {
    console.log('NG');
  }

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
