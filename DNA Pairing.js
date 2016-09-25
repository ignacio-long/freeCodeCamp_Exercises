
function pairElement(str) {
  var arrDNA = [];

  str.match(/./g).forEach(function(ch) {
    switch (ch) {
      case "A":
        arrDNA.push(["A", "T"]);
        break;
      case "T":
        arrDNA.push(["T", "A"]);
        break;
      case "C":
        arrDNA.push(["C", "G"]);
        break;
      case "G":
        arrDNA.push(["G", "C"]);
        break;
    }
  });
  
  return arrDNA;
}

pairElement("GCG");
