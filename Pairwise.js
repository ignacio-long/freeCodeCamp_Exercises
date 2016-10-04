function pairwise(arr, arg) {
  var pairwiseSum = 0,
      skip = [];

  for (var i = 0; i < arr.length - 1; i++) {    // Loop through array
    for (var j = i+1; j < arr.length; j++) {    // Loop through remaining elements
      while (skip.indexOf(i) >= 0) {            // if element i was used, skip
        i++;
        if (i === j) {
          j++;
        }
      }
      while (skip.indexOf(j) >= 0) {         // if element j was used, skip
        j++;
      }
      if (arr[i] + arr[j] === arg) {         // if both add to arg, sum total and push elements onto skip list
        pairwiseSum += i + j;
        skip.push(j);
        i++;
      }
    }
  }

  return pairwiseSum;
}

//pairwise([1,4,2,3,0,5], 7);
//pairwise([1, 1, 1], 2);
pairwise([0, 0, 0, 0, 1, 1], 1);
