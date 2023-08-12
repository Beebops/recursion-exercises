/** product: calculate the product of an array of numbers.
 */

function product(nums) {
  // base case
  if (nums.length === 0) return 1
  // normal case
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words
 */

function longest(words, i = 0) {
  // base case
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

/** everyOther: return a string with every other letter.
 */

function everyOther(str, i = 0) {
  // base case is if there is only 1 or 2 chars in str
  if (str.length <= 2) return str[0]

  if (i < str.length) {
    return str[i] + everyOther(str, i + 2)
  } else {
    return ''
  }
}

/** isPalindrome: checks whether a string is a palindrome or not.
 *
 *isPalindrom(tacocat) // true
 isPalindrome("a") // true
 isPalindrome("goodbye") // false
 t = t str[0] === str[str.length -1]
 str[i +1] === str[str.length - 2]
 str[i + 2] === str[str.length -3]

 */

function isPalindrome(str, first = 0, last = str.length - 1) {
  if (first >= last) return true
  if (str[first] !== str[last]) return false

  return isPalindrome(str, first + 1, last - 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1
  }

  let mid = Math.floor((low + high) / 2)

  if (arr[mid] === val) {
    return mid
  } else if (arr[mid] > val) {
    return binarySearch(arr, val, low, mid - 1)
  } else {
    return binarySearch(arr, val, mid + 1, high)
  }
}

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
