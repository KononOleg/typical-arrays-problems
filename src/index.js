module.exports = function reverse (n) {
      n= Math.abs(n);
      return Number(String(n).split('').reverse().join(''));
}
