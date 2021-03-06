// Based on 붙임_화장품 표시광고 관리 가이드라인 개정(2021.12.30).pdf

/** @type {Array<string>} */
export const words = [
  '아토피',
  '모낭충',
  '건선',
  '살균',
  '소독',
  '항염',
  '진통',
  '해독',
  '이뇨',
  '항암',
  '항진균',
  '항바이러스',
  '통증',
  '면역',
  '항알레르기',
  '찰과상',
  '관절',
  '림프선',
  '부작용',
];

/** @type {Array<[string, string]>} */
export const wordCombinations = [
  ['피로', '회복'],
  ['근육', '이완'],
  ['화상', '치료'],
  ['화상', '회복'],
];

/**
 * @param {string} pre 
 * @param {string} suf 
 * @returns {RegExp}
 */
const createWordComboRegExp = (pre, suf) => (new RegExp(`${pre}(.*?)${suf}`));

export const wordComboPresets = wordCombinations.map(([pre, suf]) => (
  {
    combination: [pre, suf],
    regex: createWordComboRegExp(pre, suf),
  }
));
