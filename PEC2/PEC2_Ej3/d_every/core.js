// Check to see if all elements in an array
// are even numbers.

function allEven(input) { 
  return input.every(num => !(num % 2));
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every((num, _, array) => typeof num === typeof array[0]);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every(row => Array.isArray(row) && row.every(num => num >= 0));
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  return input.every(word => {
    const vowels = /[A,E,I,O,U,a,e,i,o,u]/g;
    const vocales = [...word.matchAll(vowels)];
    return vocales.every(([vocal], _, [array]) => vocal === array[0]);
  });
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
