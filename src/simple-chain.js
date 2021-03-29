const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!this.chain) {
      this.chain = [];
    }
    if (typeof value !== 'undefined') {
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push(`(  )`);
    }
    return this;
  },
  removeLink(position) {
    if (this.chain && this.getLength() >= position && position >= 0) {
      if (position) {
        const firstPart = this.chain.slice(0, position - 1);
        const secondPart = this.chain.slice(position);
        this.chain = firstPart.concat(secondPart);       
      } else {
        this.chain = this.chain.slice(1);
      }
      return this;
    } else {
      this.chain = [];
      throw new Error('There is not such a position!');
    }
  },
  reverseChain() {
    if (this.chain) {
      this.chain.reverse();
    }
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = chainMaker;
