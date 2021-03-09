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
    // throw new CustomError('Not implemented');
  },
  removeLink(position) {
    if (this.chain && this.getLength() >= position && position) {
      this.chain = this.chain
        .slice(0, position - 1)
        .concat(this.chain.slice(position));
      return this;
    } else {
      throw new Error('There is not such a position!');
    }
    // throw new CustomError('Not implemented');
  },
  reverseChain() {
    if (this.chain) {
      this.chain.reverse();
    }
    return this;
    // throw new CustomError('Not implemented');
  },
  finishChain() {
    return this.chain.join('~~');
    // throw new CustomError('Not implemented');
  },
};

module.exports = chainMaker;

// console.log(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain());
// '( NaN )~~( null )~~( true )~~( false )~~( 1.233 )'

// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
// ( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )

// console.log(chainMaker.addLink(7).addLink(9).addLink(null).removeLink(1).finishChain());
// console.log(chainMaker.addLink(7).addLink(9).reverseChain()/* .finishChain() */);
// console.log(chainMaker.addLink(3).addLink().addLink(5).removeLink(3).reverseChain().finishChain());

// node src/simple-chain.js
