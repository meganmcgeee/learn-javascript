// Blackjack card counter, takes in a playing card value and tells player whether they should hold or bet with card
// 1:43, https://www.youtube.com/watch?v=PkZNo7MFNFg

let count = 0;

function countCards(card){
  switch (card){
    // if the card is a 2- 6, add one to the count variable 
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
        // if the card is 10-"K:, minus one to the count variable 
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  } 
var holdbet = 'Hold'
// If the count variable is greater than 1, or card is 2-6, the app returns Bet, otherwise, if card is 10-"K", it stays with default at hold.
if (count > 0){
  holdbet ='Bet'
}
return count + " " + holdbet;
}

countCards("A")

