function addTogether() {
  var pass = arguments[0];
    
  if (typeof(arguments[0]) !== "number" || (arguments.length > 1 && typeof(arguments[1]) !== "number")) {
    return undefined;
  }
  
  if (arguments.length >= 2) {
    return arguments[0] + arguments[1];
  } else if (arguments.length === 1) {
    return function(val) {
      return typeof(val) === "number" ? pass + val : undefined;
    };
  }
  return false;
}

addTogether(2, 3);
