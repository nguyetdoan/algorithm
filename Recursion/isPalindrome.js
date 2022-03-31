// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    if (str.length === 2 & str[0] === str[1]) return true;
    if (str.length === 0) return true;
    return str[0] === str[str.length - 1] &&  isPalindrome(str.slice(1, str.length - 1))
  }