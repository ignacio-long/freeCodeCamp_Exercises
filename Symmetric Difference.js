function sym() {
  if (arguments.length < 2) { return arguments; }               // In case there's not enough args

  var symmDiff = [];

  function difference(arr1, arr2) {                             // returns an array with difference
    var diff = [];
    arr1.forEach(function(val) {
      if (arr2.indexOf(val) < 0 && diff.indexOf(val) < 0) {
        diff.push(val);
      }
    });
    arr2.forEach(function(val) {
      if (arr1.indexOf(val) < 0 && diff.indexOf(val) < 0) {
        diff.push(val);
      }
    });
    return diff;
  }

  symmDiff = difference(arguments[0], arguments[1]);            // get difference

  for (var i = 2; i < arguments.length; i++) {
    symmDiff = difference(symmDiff, arguments[i]);              // keep getting it!!
  }

  return symmDiff.sort(function(a, b) { return a-b; });
}

sym([1, 2, 3], [5, 2, 1, 4]);
