const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === 'string') {
    let num = Number(sampleActivity);
    if (num > 0 && num <= 15) {
      ageofThing = Math.log(MODERN_ACTIVITY/num)/(Math.log(2)/HALF_LIFE_PERIOD);
      return Math.round(ageofThing);
    } else {
      return false;
      }
  } else {
    return false;
    } 
};
