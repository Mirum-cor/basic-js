
module.exports = function countCats(matrix) {
  let numberOfCats = 0;
  matrix.forEach(arr => arr.forEach(symbol => {
    if (symbol === '^^') {
      numberOfCats++;
    }
  }));
  return numberOfCats;
};
