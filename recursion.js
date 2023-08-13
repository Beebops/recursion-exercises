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
 */

function isPalindrome(str, first = 0, last = str.length - 1) {
  // Base case: All characters have been checked
  if (first >= last) return true

  // If characters at the current positions don't match
  if (str[first] !== str[last]) return false

  return isPalindrome(str, first + 1, last - 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present).
 */

function findIndex(arr, val, index = 0) {
  if (index >= arr.length) {
    // Base case: Entire array has been searched, and item not found
    return -1
  }

  if (arr[index] === val) {
    // Found the item, return its index
    return index
  }

  // Recursively search the rest of the array
  return findIndex(arr, val, index + 1)
}

/** revString: return a copy of a string, but in reverse.
 *  abcd -> dcba   bcd + a ->bcda cd + ba -> cdba  d + cba
 *
 *
 * if str is 0 or 1 chars return str
 * remove each char at beginning of str and add it to begining of empty str
 */

function revString(str) {
  if (str.length <= 1) return str
  // reverse the rest of the string (excluding the first character)
  // and concatenate the first character at the end
  return revString(str.slice(1)) + str[0]
}

/** gatherStrings: given an object, return an array of all of the string values.
 * {
      firstName: "Lester",
      favoriteNumber: 22,
      moreData: {
        lastName: "Testowitz"
      },
      funFacts: {
        moreStuff: {
          anotherNumber: 100,
          deeplyNestedString: {
            almostThere: {
              success: "you made it!"
            }
          }
    gatherStrings(obj) // ["Lester", "Testowitz", "you made it!", "nice!"]
    
    iterate through each property of the object
    check is the value of the key is a string
    if its a string, append it to the array
    if its an object, gatherStrings(value)
 */

function gatherStrings(obj, result = []) {
  let values = Object.values(obj)
  console.log(result)
  for (let value of values) {
    if (typeof value === 'string') {
      result.push(value)
    } else if (typeof value === 'object') {
      gatherStrings(value, result)
    }
  }
  return result
}

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
