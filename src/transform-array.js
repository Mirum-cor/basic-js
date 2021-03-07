module.exports = function transform(arr) {
  const initialArray = arr.slice();
  const intermedialArray = [];
  const result = [];
  let nextShouldBeDiscarded = false;
  for (let i = 0; i < initialArray.length; i++) {
    if (nextShouldBeDiscarded) {
      nextShouldBeDiscarded = false;
      if (
        initialArray[i] === '--discard-next' ||
        initialArray[i] === '--discard-prev' ||
        initialArray[i] === '--double-next' ||
        initialArray[i] === '--double-prev'
      ) {
        intermedialArray.push(initialArray[i]);
      } else {
        intermedialArray.push({ value: initialArray[i], isDiscarded: true });
      }
      continue;
    }
    switch (initialArray[i]) {
      case '--discard-next':
        nextShouldBeDiscarded = true;
        intermedialArray.push(initialArray[i]);
        break;
      case '--discard-prev':
        if (i - 1 >= 0 && typeof intermedialArray[i - 1] === 'object') {
          intermedialArray[i - 1].isDiscarded = true;
        }
        intermedialArray.push(initialArray[i]);
        break;
      case '--double-next':
        if (i + 1 < initialArray.length) {
          intermedialArray.push({
            value: initialArray[i + 1],
            isDiscarded: false,
          });
        } else {
          intermedialArray.push(initialArray[i]);
        }
        break;
      case '--double-prev':
        if (
          i - 1 >= 0 &&
          typeof intermedialArray[i - 1] === 'object' &&
          !intermedialArray[i - 1].isDiscarded
        ) {
          intermedialArray.push({
            value: initialArray[i - 1],
            isDiscarded: false,
          });
        } else {
          intermedialArray.push(initialArray[i]);
        }
        break;
      default:
        intermedialArray.push({ value: initialArray[i], isDiscarded: false });
        break;
    }
  }
  intermedialArray.map((potentialResultMember) => {
    if (
      typeof potentialResultMember === 'object' &&
      !potentialResultMember.isDiscarded
    ) {
      result.push(potentialResultMember.value);
    }
  });
  return result;
};
