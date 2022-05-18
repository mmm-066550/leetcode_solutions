function isPalindrome(x: number): boolean {
  return x === +String(x).split("").reverse().join("");
};