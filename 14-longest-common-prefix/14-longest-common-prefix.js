/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let output = "";
  const shortest = strs.reduce((a, b) => (a.length < b.length ? a : b));
  if (strs.length) {
    for (let i = shortest.length; i - 1 >= 0; i--) {
      const arr = strs.map((str) => str.startsWith(shortest.slice(0, i)));
      if (arr.reduce((a, b) => a && b)) {
        output = shortest.slice(0, i);
        break;
      }
    }
  }
  return output;
};