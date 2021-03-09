module.exports = class DepthCalculator {
  constructor() {
    this.counter = 1;
  }
  calculateDepth(arr) {
    const depthArr = [];
    arr.map((member) => {
      if (typeof member === 'object') {
        if (member.length) {
          member.forEach((elem) => depthArr.push(elem));
        } else {
          depthArr.push('empty array');
        }
      }
    });
    if (depthArr.length) {
      this.counter++;
      this.calculateDepth(depthArr);
    }
    return this.counter;
  }
};
