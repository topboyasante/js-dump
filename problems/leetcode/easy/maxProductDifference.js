// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
// Return the maximum such product difference.

var maxProductDifference = function (nums) {
  //Check if our array has 0 or less in it:
  nums.map((item) => {
    if (item <= 0) {
      return;
    }
  });

  //sort the array from lowest to highest:
  const sortedNNArray = nums.sort(function (a, b) {
    return a - b;
  });
  //the function: picks two numbers (a,b), and subtract(a-b). if we get a negative result, b>a

  console.log(sortedNNArray);

  // pick the first two numbers(the least two numbers in the array)
  const firstLeastNumber = sortedNNArray[0];
  const secondLeastNumber = sortedNNArray[1];

  //pick the last two numbers(the highest two numbers in the array)
  const firstHighestNumber = sortedNNArray[sortedNNArray.length - 2];
  const secondHighestNumber = sortedNNArray[sortedNNArray.length - 1];

  return (
    firstHighestNumber * secondHighestNumber -
    firstLeastNumber * secondLeastNumber
  );
};

console.log(maxProductDifference([10, 10, 10, 10]));
