module.exports.reversePlusOne = function reversePlusOne (argumentArray) {
  argumentArray.reverse();
  argumentArray.unshift(1);
  return(argumentArray);
};

module.exports.plusesEverywhere = function plusesEverywhere (plusArray) {
  // var lastEntry = (plusArray.length - 1);
  // var counter = 0;
  // if (counter < plusArray.length) 
  // {
  //  return(plusArray[counter] + "+");
  //  counter++;
  //}
  return(plusArray.join("+"));

};

module.exports.arrayQuantityPlusOne = function arrayQuantityPlusOne (array) {
  return(array.length + 1);
};