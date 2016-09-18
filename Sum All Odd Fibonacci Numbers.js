function sumFibs(num) {
  var oddFibSum = 2,
      fibs = [1, 1];

  while (num >= fibs[fibs.length-1] + fibs[fibs.length-2]) {
    fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2]);
    if (fibs[fibs.length-1] % 2 === 1) {
      oddFibSum += fibs[fibs.length-1];
    }
  }

  return oddFibSum;
}

sumFibs(4);
