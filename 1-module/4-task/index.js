function checkSpam(str) {
  const pattern = /1xBet | XXX/i;
  return pattern.test(str);
}
