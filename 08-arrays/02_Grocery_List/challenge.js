module.exports.addItem = function addItem (newItem, newArray) {     
  if (!(newArray.indexOf(newItem) > -1)) 
      {
        newArray.push(newItem);
        return(newArray);
      }
      else
        { 
          return(newArray);
        }
};

module.exports.reverseSortedList = function reverseSortedList (newArray) {
  newArray.sort();
  newArray.reverse();
  return(newArray);
};