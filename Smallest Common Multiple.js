function smallestCommons(arr) {

  function greatestCommonFactor(a, b) {
    while (a !== b) {
      a -= a > b ? b : 0;
      b -= b > a ? a : 0;
    }

    return a;
  }

  function smallestCommonMultiple(a, b) {
    return a * b / greatestCommonFactor(a, b);
  }

  
  for (var i = Math.min.apply(null, arr); i < Math.max.apply(null, arr) -1; ) {    // Fill up the array with all values in between
    arr.push(++i);
  }

  return arr.sort(function(a, b) {          // Sort the array from lowest to highest
    return a - b;
  }).reduce(function (prev, curr) {         // Reduce it to the smallest Common Multiple of all numbers!
    return smallestCommonMultiple(prev, curr);
  });
}


smallestCommons([1, 5]);
