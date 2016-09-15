function chunkArrayInGroups(arr, size) {
  var retArr = [];
  
  for (var i = 0; i < arr.length; i+= size) {  // Push slices of arr with the length of size into retArr
    retArr.push(arr.slice(i, i+size));
  }

  return retArr;
}

// Tester
chunkArrayInGroups(["a", "b", "c", "d"], 2);   // [["a", "b"], ["c", "d"]]
