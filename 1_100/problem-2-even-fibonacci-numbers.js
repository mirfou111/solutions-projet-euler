function fiboEvenSum(n) {
let sum = 0, a = 1 , b = 2, c;
while (b <= n){
  if(b % 2 === 0){
    sum += b;
  }
  c = a;
  a = b;
  b = c + b;
  // To avoid using a temp variable `c` I should use 
  // this instead to calculate the following Fibi terms
  // [a, b] = [a, a+b]
} 
  return sum;
}
