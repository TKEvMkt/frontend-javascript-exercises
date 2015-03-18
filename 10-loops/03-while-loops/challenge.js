module.exports.stream = function stream (conditionalFn, actionFn) 
{
 var trueValue = (conditionalFn());
 while (trueValue != false)
 {
  actionFn();
  trueValue = conditionalFn();
 }

};

module.exports.sumNumbers = function sumNumbers (argArray) 
{
  var counter = (argArray.length - 1);
  var sumNum = 0;
  while (counter >= 0)
  {
    newNum = (sumNum + argArray[counter]);
    sumNum = newNum;
    counter--;
  }
  return(sumNum);
};

