
function telephoneCheck(str) {

  var validFormat = [/\d{3}\d{3}\d{4}/,          //2223334444
                     /\d{3} \d{3} \d{4}/,        //222 333 4444
                     /\d{3}-\d{3}-\d{4}/,        //222-333-4444
                     /\(\d{3}\)\d{3}-\d{4}/,     //(222)333-4444
                     /\(\d{3}\) \d{3}-\d{4}/];   //(222) 333-4444

  for (var i = 0; i < validFormat.length; i++) {
    var expr = validFormat[i];
    if (str.match(expr)) {
      if (str === str.match(expr)[0] || str === "1" + str.match(expr)[0] || str === "1 " + str.match(expr)[0]) {
        return true;
      }
    }
  }
  
  return false;
}


// ----- TESTER ----- //
telephoneCheck("555-555-5555");
