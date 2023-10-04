function camelize(str) {
  let arr = str.split('-');
  return arr[0] + arr.slice(1).map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join('');
  }
