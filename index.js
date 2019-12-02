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



//Introduction to Javascript objects and different ways to get data from them  

// Create agency resource object with properties that are information about agency 
let agencyResource = {
  "x": "-118.2467481",
  "y": "34.04230597",
  "cat1": "Social Services",
  "cat2": "Homeless Shelters and Services",
  "org_name":	"Lamp Community - Frank Rice Access Center",
  "addrln1": "627 San Julian St.",	
  "addrln2": "",
  "city": "Los Angeles",
  "state": "CA",	
  "hours": "Monday through Friday, 8:00am to 4:00pm. ",
  "phones": "Administrative (213) 488-9559, Service/Intake (213) 488-0031",
  "description": "The agency provides homeless support services and shelter for adults who have chronic mental illness and who are in Skid Row and downtown Los Angeles, including people who are undocumented or who have developmental disabilities or a dual diagnosis of mental illness and substance abuse.",
  "groups": ["undocumented", "developmental disabilities", "dual diagnosis", "mental illness", "substance abuse"],
  "beds openCount": "21"
}

// Dot notation in javascript


// Uses dot notation to get the property of the org_name key
let organization = agencyResource.org_name;

// Accessing properties in bracket notation
// bracket notation is required if there are spaces in the property

let bedsOpen = agencyResource["beds openCount"];

console.log(organization + " is open "+ agencyResource.hours + " and currently there are " + bedsOpen + " beds open.");

agencyResource.hours ="Monday through Friday, 8:00am to 6:00pm";

console.log("Our hours have updated.");

console.log(organization + " is now open "+ agencyResource.hours + " and currently there are " + bedsOpen + " beds open.");

// Check if an object has a property!

function checkResource (checkProp){
  if (agencyResource.hasOwnProperty(checkProp)){
    return agencyResource[checkProp]
  } else {
    return "Not Found"
  }
}
console.log(checkResource("addrln1"))