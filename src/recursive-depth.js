const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
/*   constructor() {
    this.counter = 1;
  } */
  calculateDepth(arr) {
/*     const depthArr = [];
    arr.map((member) => {
      // console.log(member, typeof member);
      if (typeof member === 'object') {
        if (member.length) {
          member.forEach((elem) => depthArr.push(elem));
        } else {
          depthArr.push('empty array');
        }
      }
    });
    // console.log(depthArr, this.counter);
    // console.log(depthArr.length);
    if (depthArr.length) {
      this.counter++;
      // arr = depthArr;
      // console.log(arr, this.counter);
      this.calculateDepth(depthArr);
    }
    return this.counter; */
    throw new CustomError('Not implemented');
  }
};

// const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5])); // 1
// console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]])); // 2
// console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5, []], [6, 7]])); // 3
// console.log(depthCalc.calculateDepth([[[]]])); // 3
// console.log(depthCalc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []])); // 3
// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5, [1, []]])); // 3
// console.log(depthCalc.calculateDepth([1, 2, 3, [1], 4, 5, [1]])); // 2
// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5, [1, []]])); // 3
// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]])); // 15

// node src/recursive-depth.js
