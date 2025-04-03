/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const s = str.toLowerCase();
  const s1 = s.replace(/[^a-z0-9]/g, '');
  return s1 === s1.split('').reverse().join('');
}

module.exports = isPalindrome;
