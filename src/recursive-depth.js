module.exports = class DepthCalculator {
  constructor() {
    this.counter = 1;
    this.step = 1;
    this.result = [];
    this.finalDepth = 0;
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
      this.step++;
      this.calculateDepth(depthArr);
    }
    this.result.push(this.counter);
    this.step--;
    if (!this.step) {
      this.finalDepth = Math.max(...this.result);
      this.counter = 1;
      this.step = 1;
      this.result = [];
    }
    return this.finalDepth;
  }
};
