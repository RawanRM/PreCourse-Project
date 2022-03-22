/**
 * REFERENCES:
 * - String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#
 *
 * If you'd like to run your function to test it yourself,
 * uncomment it from the bottom of this file, then run this
 * file with `node project.js`.
 *
 * Good luck!
 */

/**
 * sumOdds(numbers):
 * - receives an array of numbers
 * - returns the sum of only the ODD numbers
 *
 * e.g.
 * sumOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> 25
 * sumOdds([3, 7, 8, 15, 2, 1, 13]) -> 39
 * // access each num and check if it is odd
 * if odd-> add it to the next odd number 
 * add the result of addition to the next odd num found until
 * get all the odd numbers, once u get them, add them all together
 * done show the result.
 */
function sumOdds(numbers) {
 const odss = numbers.forEach(num=>{if(num % 2 !== 0){}} )
}
// console.log(sumOdds([3, 7, 8, 15, 2, 1, 13]));

/**
 * characterCount(string, c):
 * - receives a string and a character
 * - returns the number of times `c` occurs in the string
 * - note: this has to be case-insensitive
 *
 * e.g.
 * characterCount("Michael Stephenson", "e") -> 3
 * characterCount("Character Count is clever", "c") -> 4
 *
 * Hint: You need to turn the string into an array first
 * Another Hint: Use string methods to make it case-insensitive
 */
function characterCount(string, c) {
  // Your code here
}
// console.log(characterCount("Character Count is clever", "c"));

/**
 * largestIncrement(numbers):
 * - receives an array of numbers
 * - returns the largest difference between two consecutive numbers in the array
 * - see example below for clarification
 * - assume all differences are positive numbers
 * e.g.
 * largestIncrement([1, 3, 7, 9, 12]) -> 4
 * 3 - 1 = 2
 * 7 - 3 = 4
 * 9 - 7 = 2
 * 12 - 9 = 3
 * largest: 4
 *
 * largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> 545
 */
function largestIncrement(numbers) {
  // Your code here
}
// console.log(largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]));

/**
 * afterX(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns an array of every number in `numbers` that occurs after `x`.
 *
 * - assume there are no duplicate numbers.
 *
 * e.g.
 * afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) -> [4, 5, 6, 7, 8, 9]
 * afterX([11, 35, 52, 14, 56, 601, 777, 888, 999], 52) -> [14, 56, 601, 777, 888, 999]
 */
 let vb = [];
 let va = 0
function afterX(numbers, x) {
  va = numbers.indexOf(x);
  return numbers.splice(va+1,(numbers.length-va));
  
}
 //console.log(afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));


/**
 * abbreviate(firstName, lastName):
 * - receives a first name and a last name
 * - returns the initials in uppercase
 *
 * e.g.
 * abbreviate("Michael", "Singer") -> "MS"
 * abbreviate("jordan", "peterson") -> "JP"
 *
 * Hint: Use string method .toUpperCase()
 */
function abbreviate(firstName, lastName) {
  
  let fn = firstName.slice(0,1);

  let ln = lastName.slice(0,1);
  return fn.toUpperCase()+ln.toUpperCase();

}
// console.log(abbreviate("miss", "Stephane"));

/**
 * isUpperCase(string):
 * - receives a string
 * - returns true if the string is uppercase, false otherwise
 *
 * e.g.
 * isUpperCase("Mickey S") -> false
 * isUpperCase("JCREW") -> true
 *
 */
function isUpperCase(string) {
  if(string.toUpperCase() === string){
      return true;
  }else {return false;}
}

// console.log(isUpperCase("JCREW"));

/**
 * elementInArray(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns true if `x` is found in the array, false otherwise
 *
 * e.g.
 * elementInArray([5, 6, 7], 6) -> true
 * elementInArray([5, 6, 7], 8) -> false
 *
 */
function elementInArray(numbers, x) {
 numbers.forEach(num=> {if(num === x){}else if(num !== x){}} )
 return true;
}
// console.log(elementInArray([5, 6, 7], 8));

module.exports = {
  sumOdds,
  characterCount,
  largestIncrement,
  afterX,
  abbreviate,
  isUpperCase,
  elementInArray,
};
