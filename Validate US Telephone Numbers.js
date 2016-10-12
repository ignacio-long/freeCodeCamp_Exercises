
function telephoneCheck(str) {

  var validFormats = [/\d{3}\d{3}\d{4}/,          // 2223334444
                     /\d{3} \d{3} \d{4}/,        // 222 333 4444
                     /\d{3}-\d{3}-\d{4}/,        // 222-333-4444
                     /\(\d{3}\)\d{3}-\d{4}/,     // (222)333-4444
                     /\(\d{3}\) \d{3}-\d{4}/];   // (222) 333-4444

  for (var i = 0; i < validFormats.length; i++) {
    if (str.match(validFormats[i])) {
      var compareTo = str.match(validFormats[i])[0];
      if (str === compareTo || str === "1" + compareTo || str === "1 " + compareTo) {
        return true;
      }
    }
  }
  
  return false;
}


// -------- TESTER -------- //
telephoneCheck("555-555-5555");
