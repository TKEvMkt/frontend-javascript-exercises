module.exports.createCourse = function createCourse (arg1, arg2, arg3) {
  var course = {
    title: arg1,
    duration: arg2,
    students: arg3
  };
  // return('title: ' + course.title + ', ' + 'duration: ' + course.duration + ', ' + 'students: ' + course.students);
  return(course);
};

module.exports.addProperty = function addProperty (object, newProp, newValue) {

  if ( object.hasOwnProperty(newProp) ) 
  // I tried this previously but could not truly understand it's use.
  // retrieved from http://stackoverflow.com/questions/135448/how-do-i-check-if-an-object-has-a-property-in-javascript 
      {
      return(object);
      }
        else
        {
        object[newProp] = newValue;
        return(object);
        };          
  };

//module.exports.addProperty = function addProperty (object, newProp, newValue) {
  //return (object);
  
  //};




module.exports.formLetter = function formLetter (letter) {
  return("Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender);
};

module.exports.canIGet = function canIGet (item, money) {
  var wants = item;
  var has = money;
  var priceChart = {};
  // create objects to be placed in priceChart object;
  var item1 = {
    upc: 'MacBook Air',
    price: '999'
  };
  var item2 = {
    upc: 'MacBook Pro',
    price: '1299'
  };
  var item3 = {
    upc: 'Mac Pro',
    price: '2499'
  };
  var item4 = {
    upc: 'Apple Sticker',
    price: '1'
  };
  priceChart.mBA = item1;
  priceChart.mBP = item2;
  priceChart.mcP = item3;
  priceChart.aSt = item4;
  

  // I tested the above in Chrome inspector and it worked.  I called up "priceChart.mcP.price" and Chrome returned "2499".
  var n1 = priceChart.mBA.upc;
  var n2 = priceChart.mBA.price;
  var n3 = priceChart.mBP.upc;
  var n4 = priceChart.mBP.price;
  var n5 = priceChart.mcP.upc;
  var n6 = priceChart.mcP.price;
  var n7 = priceChart.aSt.upc;
  var n8 = priceChart.aSt.price;
  // now will try to solve using booleans instead of "if" statement.
  return(((wants == n1) && (has >= n2)) || ((wants == n3) && (has >= n4)) || ((wants == n5) && (has >= n6)) || ((wants == n7) && (has >= n8)));

};