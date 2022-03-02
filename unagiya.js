/* --------------------------------
output
5

-------------------------------- */

/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
const main = () => {
  let input_lines = lines[0].split(' ');
  let table = input_lines[0];
  let grp = input_lines[1];
  const chairs = new Array(table);
  for (let i = 0; i < table; i++) {
    chairs[i] = false;
  }

  let count = 0;
  for (let i = 1; i <= grp; i++) {
    let input_lines2 = lines[i].split(' ');
    const ppl = parseInt(input_lines2[0]);
    let start = parseInt(input_lines2[1]);
    start -= 1;

    let flag = true;
    for (let j = 0; j < ppl; j++) {
      if (chairs[(j + start) % table] !== false) {
        flag = false;
      }
    }

    if (flag) {
      for (let j = 0; j < ppl; j++) {
        chairs[(j + start) % table] = true;
      }
      count += ppl;
    }
  }
  console.log(count);
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
