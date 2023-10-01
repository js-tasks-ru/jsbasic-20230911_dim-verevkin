function getMinMax(str) {
  let arr = str.split(' ').filter(item => isFinite(Number(item)));
  return {min: Math.min(...arr), max: Math.max(...arr)};
}