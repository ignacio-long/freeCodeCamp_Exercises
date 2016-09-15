function titleCase(str) {
  var titledStr = "";

  str.split(" ").map(function(word, ind) {                      // Split the string into words
    if (ind !== 0) {
      titledStr += " ";                                         // If NOT first word, add space before
    }
    word.toLowerCase().match(/./g).forEach(function(char,b) {
      titledStr += b === 0 ? char.toUpperCase() : char;         // Go through each word char by char, Capitalizing the first one only
    });
  });

  return titledStr;
}

titleCase("I'm a little tea pot");                // TESTER
