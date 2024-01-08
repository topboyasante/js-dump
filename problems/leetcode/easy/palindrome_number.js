//QUESTION: Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function (x) {
  //If X is negative, return false
  if (x < 0) {
    return false;
  }

  //Convert our number to an array of its digits
  const numberAsAnArray = Array.from(String(x), Number);
  //array-like iterable = String(x), mapFn: Number
  //The function converts the number to a string, and then converts each digit into a number
  //and adds it to the array

  const reversedArray = numberAsAnArray.slice().reverse();
  const reversedNumber = reversedArray.reduce(
    (accumulator, digit) => accumulator * 10 + digit,
    0
  );
  return x === reversedNumber;
};

console.log(isPalindrome(121));

//Things i Learned :

//Array.from(): The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
//eg: console.log(Array.from('foo')) => ["f", "o", "o"], console.log(Array.from([1, 2, 3], (x) => x + x)) => [2,4,6]

//Array.slice(a,b):return elements from index a to index(b-1). if only a is specified, return elements from index a
//If a is negative, and b was not provided, return from the end of the array, where the last element is now index of -1

//Array.reverse():reverses array elements from right to left. changes the initial array

//Array.reduce()