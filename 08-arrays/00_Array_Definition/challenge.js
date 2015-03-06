// module.exports.newArray = [1, 2, 3, 4];
// newArray.push(1, 2, 3, 4);
// newArray;

//FAILED

// var newArray = [1, 2, 3, 4];
// return(newArray);

// FAILED

// trying line from other challenge.js
module.exports.newArray = function(n1, n2, n3, n4) {
var A = [];
A.push(n1);
A.push(n2);
A.push(n3);
A.push(n4);
return(A);
};

module.exports.firstAndLast = function firstAndLast (arg1) {
  var lastEntry = arg1.length -1
  var array = [arg1[0], arg1[lastEntry]];
  return(array);


};