function updateInventory(arr1, arr2) {
  // Return arr2 in order if arr1 is empty:
  if (arr1.length === 0) {
    return arr2.sort(function(a, b) {
      return a[1] < b[1] ? -1 : 1;
    });
  }

  // Core Function:
  function searchAndAdd(item) {
    var added = false;                  // To keep track of added items
    arr1.forEach(function(inventItem) {
      if (inventItem[1] === item[1]) {  // If it exists,
        inventItem[0] += item[0];       // sum the quantities
        added = true;                   // and mark as added
      } else if (added === false && arguments[1] === arr1.length-1) {
        arr1.push(item); // If by the end it wasn't there, add it!!
      }
    });
  }
  
  arr2.forEach(function(newItem) {
    searchAndAdd(newItem);   // Take each item on arr2, look it up and add onto arr1
  });
  
  return arr1.sort(function(a, b) {  // Return in alphabetical order
    return a[1] < b[1] ? -1 : 1;
  });
}



// -------------------------------- TESTS ------------------------------------ //

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);


/*
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
*/
