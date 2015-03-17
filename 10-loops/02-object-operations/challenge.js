module.exports.copy = function copy (argObject) 
{
  var tempArray = Object.keys(argObject);
  var valArray = [];
  var newObject = {};
  for (var i = 0; i < tempArray.length; i++)
    {
    var yesKey = tempArray[i];  
    valArray.push(argObject[yesKey]); 
    newObject[yesKey] = valArray[i];
    }
    return(newObject);
};

module.exports.extend = function extend (dest, src) 
{
  var tempArray = Object.keys(src);
  for (var i = 0; i < tempArray.length; i++)
    {
    var yesKey = tempArray[i];  
    dest[yesKey] = (src[yesKey]); 
  }
    return(dest);
};


module.exports.hasElems = function hasElems (argObject, argArray) 
{
  var tempArray = Object.keys(argObject);
  if (tempArray.length < argArray.length)
  {
    return false;
  }
    else
    {
      for (var i=0; i < tempArray.length; i++)
        {
          if ((argArray !=0) && (tempArray[i] != argArray[i]))
          {
            return false;
          }
            else 
              {
                return true;
              };
        }
    };
};
