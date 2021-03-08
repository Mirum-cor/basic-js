const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    // return this.chain.split('~~').slice(0, -1).length;
    throw new CustomError('Not implemented');
  },
  addLink(value) {
/*     if (this.chain) {
      if (typeof value) {
        this.chain += `( ${value} )~~`;
      } else {
        this.chain += `(  )~~`;
      }
    } else {
      if (typeof value) {
        this.chain = `( ${value} )~~`;
      } else {
        this.chain = `(  )~~`;
      }
    }
    return this; */
    throw new CustomError('Not implemented');
  },
  removeLink(position) {
/*     if (this.chain && this.getLength() >= position && position) {
      let separator = '~~';
      if (!this.chain.split('~~').slice(position, -1).length) {
        separator = '';
      }
      this.chain = this.chain.split('~~').slice(0, position - 1).join('~~') + separator + this.chain.split('~~').slice(position, -1).join('~~');
      if (this.chain[0] === '~') {
        this.chain = this.chain.slice(2);
      }
      if (this.chain[this.getLength() - 1] !== '~') {
        this.chain += '~~';
      }
      return this;
    } else {
      throw new Error('There is not such a position!');
    } */
    throw new CustomError('Not implemented');
  },
  reverseChain() {
/*     if (this.chain) {
      this.chain = this.chain.split('~~').slice(0, -1).reverse().join('~~') + '~~';
    }
    return this; */
    throw new CustomError('Not implemented');
  },
  finishChain() {
    // return this.chain.split('~~').slice(0, -1).join('~~');
    throw new CustomError('Not implemented');
  }
};

module.exports = chainMaker;

// console.log(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain());
// '( NaN )~~( null )~~( true )~~( false )~~( 1.233 )'

// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
// ( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )

// console.log(chainMaker.addLink(7).addLink(9).addLink(null));
// console.log(chainMaker.addLink(7).addLink(9).reverseChain());
// console.log(chainMaker.addLink(3).addLink().addLink(5).removeLink(3).reverseChain().finishChain());
