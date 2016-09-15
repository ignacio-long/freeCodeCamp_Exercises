function rot13(str) { // LBH QVQ VG!

  var rot13str = "";

  str.match(/./g).forEach(function(ch) {
    if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
      ch = String.fromCharCode(ch.charCodeAt(0) + 13);
      if (ch.charCodeAt(0) > 90) {
        ch = String.fromCharCode(ch.charCodeAt(0) - 26);
      }
    }
    rot13str += String.fromCharCode(ch.charCodeAt(0));
  });

  return rot13str;
}

// TESTER:
rot13("SERR PBQR PNZC");
