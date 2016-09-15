function findLongestWord(str) {
  return str.split(" ").map(function(word) {   // Split the string in words
    return word.length;                        // Return an array of word lengths
  }).sort(function(a,b) {
    return b-a;                                // Sort this array from max to min
  })[0];                                       // Focus on first element (Longest) for function return
}

findLongestWord("The quick brown fox jumped over the lazy dog");  // TEST
