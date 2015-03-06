module.exports.favoriteNumber = function(fav, guess) {
  var favNum = fav;
  var guessNum = guess;
  if (guessNum > favNum) {
    return "Too high";
  }
  else {
    if (guessNum < favNum) {
      return "Too low";
    }
      else {
        return "You got it!";
    }
  }
};


module.exports.checkLock = function(num1, num2, num3, num4) {

  if ((num1 != 3) && (num1 != 5) && (num1 != 7)) {
    return "incorrect";
    }
    else if (num2 != 2) {
      return "incorrect";
      }
      else if ((num3 < 5) || (num3 > 100)) {
        return "incorrect";
        }
        else if ((num4 >= 9) && (num4 <= 20)) {
          return "incorrect";
          }
          else {
            return "correct";
            }
};


module.exports.canIGet = function(item, money) {
  isAnswer = true;
  if ((item == 'MacBook Air') && (money >= 999)) {
    // isAnswer = true;
    return isAnswer;
  }
    else
      if ((item == 'MacBook Pro') &&  (money >= 1299)) {
        // isAnswer = true;
        return isAnswer;
      }
      else
        if ((item == 'Mac Pro') && (money >= 2499)) {
          // isAnswer = true;
          return isAnswer;
        }
        else
          if ((item == 'Apple Sticker') && (money >= 1)) {
            // isAnswer = true;
            return isAnswer;
          }
            else {
            isAnswer = false;
            return isAnswer;
            }
};