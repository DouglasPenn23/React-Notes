// Creates a var for the count
var count = 0;

// Creates function for card counting that takes in a card
function cc(card) {
  // Only change code below this line
  // Function will Recieve Card Parameter - Done
  // Writes a switch function 
switch (card){
    // For cases 2-6, increment the count and break. 
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count ++;
  break;
  // For cases 10 & Face cards, decrement count & break. 
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count --;
  break;
}
// If count is greater than 0, bet. 
  if(count > 0){
    return count + " Bet";
  }
  else{
      // If count is less than 0. 
    return count + " Hold";
  }


  // Creates an object
  var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };