function multiplyBy10(array) {

  array = array.map(function (array) {
    return array * 10;
  })

  return array;

}

function shiftRight(array) {

  return array.map((_, index, array) => {
    const order = (array.length - 1 + index) % array.length;
    return array[order];
  });
}

function onlyVowels(array) {
  return array.map(word => word.replace(/[^aeiou]/gi, ''));
}

function doubleMatrix(array) {
  return array.map(nums => nums.map(num => num * 2));
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
