class VigenereCipheringMachine {
  constructor(machineType = true) {
    this.type = machineType;
    this.alphabet = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
  }
  encrypt(str, key) {
    if (str && key) {
      str = str.toUpperCase();
      key = key.toUpperCase();
      const alphabetLength = this.alphabet.length;
      const strLength = str.length;
      const keyLength = key.length;
      let result = '';
      let counter = 0;
      for (let strLetter = 0; strLetter < strLength; strLetter++) {
        const currentStrLetter = str[strLetter];
        const strLetterPosInAlphabet = this.alphabet.indexOf(currentStrLetter);
        const currentKeyLetter = key[counter];
        const keyLetterPosInAlphabet = this.alphabet.indexOf(currentKeyLetter);
        if (strLetterPosInAlphabet === -1) {
          result += str[strLetter];
        } else {
          result += this.alphabet[
            (strLetterPosInAlphabet + keyLetterPosInAlphabet) % alphabetLength
          ];
          counter++;
          if (counter === keyLength) {
            counter = 0;
          }
        }
      }
      str = result;
      result = '';
      if (!this.type) {
        str = str.split('').reverse().join('');
      }
      return str;
    } else {
      throw new Error('Pass the string and the key!');
    }
  }
  decrypt(str, key) {
    if (str && key) {
      str = str.toUpperCase();
      key = key.toUpperCase();
      const alphabetLength = this.alphabet.length;
      const strLength = str.length;
      const keyLength = key.length;
      let result = '';
      let counter = 0;
      for (let strLetter = 0; strLetter < strLength; strLetter++) {
        const currentStrLetter = str[strLetter];
        const strLetterPosInAlphabet = this.alphabet.indexOf(currentStrLetter);
        const currentKeyLetter = key[counter];
        const keyLetterPosInAlphabet = this.alphabet.indexOf(currentKeyLetter);
        if (strLetterPosInAlphabet === -1) {
          result += str[strLetter];
        } else {
          result += this.alphabet[
            (strLetterPosInAlphabet - keyLetterPosInAlphabet + alphabetLength) %
              alphabetLength
          ];
          counter++;
          if (counter === keyLength) {
            counter = 0;
          }
        }
      }
      str = result;
      result = '';
      if (!this.type) {
        str = str.split('').reverse().join('');
      }
      return str;
    } else {
      throw new Error('Pass the string and the key!');
    }
  }
}

module.exports = VigenereCipheringMachine;
