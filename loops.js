
/* While i is less than five increment up by one.*/
// print an array with numbers up to 4
// While loops
let myArray = [];

var i = 0;

while (i < 5){
  myArray.push(i);
 i++
 }

console.log(myArray)

// Should print [ 0, 1, 2, 3, 4 ]


// For loops
let newArray = [];

for (let i = 1; i < 5; i++){
  newArray.push(i)
}

console.log(newArray)


// print even numbers from 2-16 in an array
let evenArray = [];

for (let i = 0; i < 17; i+=2){
  evenArray.push(i)
}

console.log(newerArray)



// print odd numbers from 9-1 in an array
let oddArray = [];

for (let i = 9; i > 0; i-=2){
  oddArray.push(i)
}

console.log(oddArray)

// Add all numbers in this array
// Get the total of the numbers in this array
let existingArray = [9, 10, 11, 12];
let total = 0;

for (let i = 0; i < existingArray.length; i++){
  total += existingArray[i];
}

console.log(total)

// Accessing Multidimensional arrays with nested loops

// create a function that multiplies
function multiplyAll(arr){
  var product = 1;

  for(var i = 0; i < arr.length; i++){
    for(var j = 0; i < arr[i].length; j++){
      product *=arr[i][j];
    }
  }
}

var product = multiplyAll([[1,2],[3,4], [5,6,7]]);

console.log(product)