const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleFloat = parseFloat(sampleActivity);
  if (
    !sampleActivity ||
    typeof sampleActivity !== 'string' ||
    !sampleFloat ||
    sampleFloat > 15 ||
    sampleFloat <= 0
  ) {
    return false;
  } else {
    const coefficient =
      Math.trunc(Math.log(2) * 1000) / 1000 / HALF_LIFE_PERIOD;
    const age = Math.log(MODERN_ACTIVITY / sampleFloat) / coefficient;
    return Math.ceil(age);
  }
};
