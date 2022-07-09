import { readFileSync } from 'fs';
import { wordComboPresets, words } from './src/rules.js';

const lines = readFileSync('./src/descriptions.txt', { encoding: 'utf-8' }).split('\n');

lines.forEach((line, index) => {
  words.forEach((word) => {
    if (line.includes(word)) console.error(`${index + 1}번 줄: 금지 단어 '${word}'`);
  })
  wordComboPresets.forEach(({ combination: [pre, suf], regex }) => {
    const result = regex.exec(line);
    if (result !== null) console.error(`${index + 1}번 줄: 금지 표현 '${pre}+${suf}' (${result[0]})`);
  })
});
