module.exports.formLetter = function(firstName, senderName, message) {
  return("Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName);
};  



module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  var string1 = bigString.substring(startA,endA);
  var string2 = bigString.substring(startB,endB);
  return(string1+string2);

};

module.exports.findFirstMatch = function(text, searchString) {
  var mainText = text;
  return mainText.indexOf(searchString);

};

module.exports.findLastMatch = function(text, searchString) {
  var mainText = text;
  return mainText.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
  var mainText = text;
  var string1 = mainText.indexOf(searchString);
  var coord1 = string1 + searchString.length;
  var string2 = mainText.lastIndexOf(searchString);
  return mainText.substring(coord1,string2);

};