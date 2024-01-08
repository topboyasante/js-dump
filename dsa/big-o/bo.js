//Big O Notation: Describes the performance of an alogrithm as the amount of data increases.
//Big O is Machine Independent, because certain machines run code faster than others
//Smaller Operations are ignored, eg. O(n+1) = O(n), where n is the amount of data
//It is the number of steps a code takes to complete

//EXAMPLES

function addUp(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
//The code complexity for this is O(n) (Linear Time). Meaning that, as the data size (n) increases, the number of steps taken to run
//this code increases.

function addUp2(n) {
  const sum = (n * (n + 1)) / 2;
  return sum;
}
//The code complexity for this is O(1) (Constant time). Meaning that, as the data size increases, it takes a fixed number of steps for
//code completion to be complete