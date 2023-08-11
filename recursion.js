/** product: calculate the product of an array of numbers. 
    product([2, 3, 4])   // 24
*/

function product(nums) {
  // base case
  if (nums.length === 0) return 1
  // normal case
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words.
 * longest(["hello", "hi", "hola"]) // 5
 * longest(["abcdefg", "hijklmnop", "qrs", "tuv", "wx", "y", "z"]) // 9
 * longest(["a", "b", "c", "d", "e"]) // 1
 * longest(["abcde"]) // 5
 */

function longest(words, i = 0) {
  // base case --> ["a
  if (words.length === 1) return words[0].length
  // recursive case
  // compare length of first word with length of longest word in array
  const firstWordLength = words[0].length
  const longestRest = longest(words.slice(1), i + 1)

  // if first word is longer, then it is the new longest word
  if (firstWordLength > longestRest) {
    return firstWordLength
  } else {
    return longestRest
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
}
