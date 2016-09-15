function largestOfFour(arr) {
  // You can do this!
  var returnArr = [];
  arr.forEach(function(subArr) {    // Take each subarray
    subArr.sort(function(a,b) {
      return b-a;                   // Sort it max to min
    });
    returnArr.push(subArr[0]);      // Push first index (max) into returnArr
  });
  return returnArr;
}

// Tester:
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);   // [4, 27, 39, 1001]
