
function translatePigLatin(str) {
  switch (str[0]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return str + "way";
  }

  for (var i = 0; i < str.length; i++) {
    str = str.slice(1) + str[0];

    switch (str[0]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        return str + "ay";
    }
  }
    
}

translatePigLatin("consonant");
