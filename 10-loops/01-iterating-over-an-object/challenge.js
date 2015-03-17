module.exports.getKeys = function getKeys (argObject) 
{
    // I stole the code below but don't quite get the syntax
    // var keyArray = [];
    // for (var key in argObject) 
      // {
      // keyArray.push(key);
      // }
    // return(keyArray);
    // my code...
    var tempArray = Object.keys(argObject);
    var keyArray = [];
    for (i = 0; i < tempArray.length;i++)
    {
      keyArray.push(tempArray[i]);
    }
    return(keyArray);
};

module.exports.getValues = function getValues (argObject) 
{
  var tempArray = Object.keys(argObject);
  var valArray = [];
  for (var i = 0; i < tempArray.length; i++)
    {
    var yesKey = tempArray[i];  
    valArray.push(argObject[yesKey]); 
    }
  return(valArray);
};

module.exports.objectToArray = function objectToArray (argObject) {
  // create termp array to hold keys
  var tempArray = Object.keys(argObject);
  var finalArray = [];
  for (var i = 0; i < tempArray.length; i++)
    {
    var yesKey = tempArray[i];
    var yesVal = argObject[yesKey];
    finalArray.push(yesKey + " is " + yesVal);
    }
  return(finalArray);
};
