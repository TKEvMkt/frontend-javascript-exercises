module.exports.sumNumbers = function sumNumbers (array) 
  {
  var tempNum = 0;
  if (array.length == 0)
    // returns 0 for an empty array submission
    {
    return(tempNum);
    }
    else
      // sums the elements of the array
      {
      for (var index = 0; index < array.length; index++)
        {
        var finalNum = (tempNum + array[index]);
        tempNum = finalNum;
        };
      return(finalNum);
      };    
  };


module.exports.splitAndLowerCaseString = function splitAndLowerCaseString (inputString) 
  {
  // split the inputString into distinct parts, whether separated by space or comma
  var splitString = inputString.split(",");
  // define newArray as empty
  var newArray = [];
  for (var i = 0; i < splitString.length; i++) 
    {
    lower = splitString[i].toLowerCase();
    newArray.push(lower); 
    } 
  return(newArray);
    

  };


module.exports.addIndex = function addIndex (inputArray) 
  {
  // create the new Array for the return
  var newArray = [];
  // basing off previous exercise
  for (var i = 0; i < inputArray.length; i++) 
    {
    var newString = (i + " is " + inputArray[i]);
    newArray.push(newString); 
    } 
  return(newArray);
  };
  
