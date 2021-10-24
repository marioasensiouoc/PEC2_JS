function onlyEven(array) {
  return array.filter(num => num % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter(word => /^[^\s]*$/.test(word));
}

function positiveRowsOnly(array) {
  return array.filter(row => row.every(num => num > 0));
}

function allSameVowels(array) {
  // your code here
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
