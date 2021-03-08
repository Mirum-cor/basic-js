module.exports = function repeater(str, options) {
  let {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes = 0,
    additionSeparator = '|',
  } = options;
  str = String(str);
  if (Boolean(addition)) {
    addition = String(addition);
  }
  let result = '';
  if (!repeatTimes) {
    result += str;
    if (!additionRepeatTimes) {
      if (addition) {
        result += addition;
      }
    } else {
      for (let j = 0; j < additionRepeatTimes; j++) {
        result += addition;
        if (j < additionRepeatTimes - 1) {
          result += additionSeparator;
        }
      }        
    }
  }
  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    if (additionRepeatTimes) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        result += addition;
        if (j < additionRepeatTimes - 1) {
          result += additionSeparator;
        }
      }
    } else {
      if (typeof addition === 'string') {
        result += addition;
      } 
    }
    if (i < repeatTimes - 1) {
      result += separator;
    }
  }
  return result;
};
