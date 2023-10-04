function factorial(n) {
  let result = n || 1;
  while(n > 1){
    result *= --n;
  }
  return result;
}