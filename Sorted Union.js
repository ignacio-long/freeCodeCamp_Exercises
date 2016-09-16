function uniteUnique(arr) {
  var retArr = [];

  for (var i = 0; i < arguments.length; i++) {
    arguments[i].forEach(function(val) {
      console.log(val);
      if (retArr.indexOf(val) < 0) {
        retArr.push(val);
      }
    });
  }
  return retArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
