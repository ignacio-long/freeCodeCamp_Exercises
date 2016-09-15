function truncateString(str, num) {

  if (num >= str.length) { return str; }    // Return full string if num is large enough
  if (num < 3) { num += 3; }                // Add 3 to low num, to avoid counting for the three dots
  return (str.slice(0, (num-3)) + "...");   // Slice the str and add the dots..
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
