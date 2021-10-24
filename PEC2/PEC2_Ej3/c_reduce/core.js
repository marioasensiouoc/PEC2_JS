function sum(array) {
  return array.reduce((sum, num) => sum + num, 0);
}

function productAll(array) {
  return array.reduce((result, nums) => result * nums.reduce((multiply, actual)=>multiply * actual, 1), 1);
}

function objectify(array) {
  return array.reduce((obj, [key, array]) => {
    obj[key] = array;
    return obj;
  }, {});
}

function luckyNumbers(array) {
  return array.reduce((phrase, num, order, array) => {
    const words = order === array.length -1 ? ` and ${num}` : ` ${num},`;
    phrase += words;
    return phrase;
  }, 'Your lucky numbers are:');
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
