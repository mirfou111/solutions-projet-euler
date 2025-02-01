function largestPrimeFactor(number) {
  for (let fact = parseInt(Math.sqrt(number)); fact >= 2; fact--) {
    if (number % fact === 0 && isPrime(fact)) {
      return fact;
    }
  }
  return number; 
}

function isPrime(n) {
  if (n === 2) return true;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}


largestPrimeFactor(13195);