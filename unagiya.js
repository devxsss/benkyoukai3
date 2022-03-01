/* --------------------------------
output
5

-------------------------------- */

/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
const main = () => {
  let input_lines = gets.split(' ');
  let table = input_lines[0];
  let grp = input_lines[1];
  let chairs = Array.new(input_lines[0], false);

  for (let i = 0; i < N; i++) {
    const line = lines[i + 1].split(' ');
    const group = line[0];
    const start = line[1];
    const index = line[1] - 1;
    //跨がない
    if (index + group <= chairs.length) {
      chairs[(index, group)].some((x) => x === false);
      chairs[(index, group)] = Array.new(group, true);
    } else {
      last = (index + group) % chairs.length;
      if (chairs[(index, group)].some((x) => x === false) || chairs[index]) {
        chairs[(0, last)] = Array.new(last, true);
        chairs[(index, -1)] = Array.new(group - last, true);
      }
    }
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
