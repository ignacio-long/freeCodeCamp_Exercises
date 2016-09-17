function sumPrimes(num) {
  var sumTotal = 0;

  function primeNumbers(limit) {
    var currPrime=7,
        primeList = [2,3,5,7];          // Start off with lower primes
 
    function ifPrimeAdd(numToTest) {    // Test and push numbers into list
      for (var i = 3; ; i++) {
         if ( numToTest / primeList[i] < primeList[i]) {
           if (numToTest <= limit) {    // Push them if Primes <= limit
             primeList.push(numToTest);
           }
             return;
         } else if ( numToTest / (primeList[i]) === Math.floor(numToTest / (primeList[i])) ) {
             return;
         } 
      }
    }
    
    while ( currPrime <= limit ) {       // Same as before, just the call here..
      [4,2,4,2,4,6,2,6].forEach(function(scale) {
        ifPrimeAdd( currPrime += scale );
      });
    }
 
    return primeList;
  }

  primeNumbers(num).forEach(function(val) {
    sumTotal += val;
  });

  return sumTotal;
}

sumPrimes(10);
