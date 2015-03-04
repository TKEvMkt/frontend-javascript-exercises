module.exports.equalStrings = function(stringOne, stringTwo) {
  return(stringOne == stringTwo);
};

module.exports.notEqual = function(one, two) {
  return(one !== two);
};

module.exports.inBetween = function(lower, middle, upper) {
  return((lower < middle) && (middle < upper));
};

module.exports.outsideRanges = function(number) {
  //var rangeOne = (number < 10) && (number > 20);  !((number < 10) && (number > 20))  is equivalent to !(number < 10) || !(number >20)
  var isLessThanTen = (number < 10); //A
  var isGreaterThanTwenty = (number >20); //B 
  var rangeOne = isLessThanTen || isGreaterThanTwenty;
  var isLessThan42 = (number <= 42);
  var isGreaterThan75 = (number > 75);
  var rangeTwo = isLessThan42 || isGreaterThan75;
  var isLessThan1 = (number <= 1);
  var isGreaterThan6 = (number >= 6);
  var rangeThree = isLessThan1 || isGreaterThan6; 
  return(rangeOne && rangeTwo && rangeThree);  //allRangesAreTrue
};

module.exports.nameAndPrice = function(name, price) {
  var isNYT = (name == 'NYTimes');
  var isLAT = (name == 'LATimes');
  var price = (price >= 1);
  return((isNYT || isLAT)) && price;

};