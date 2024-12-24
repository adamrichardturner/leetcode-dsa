function sortedSquares(nums: number[]): number[] {
  /*
      Given an integer array nums sorted in non-decreasing order, 
      return an array of the squares of each number sorted in non-decreasing order.
  */

  const sorted: number[] = new Array(nums.length); // Preallocate result array
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1; // Start filling from the end

  while (left <= right) {
    const leftVal = nums[left] ** 2;
    const rightVal = nums[right] ** 2;

    if (leftVal > rightVal) {
      sorted[index] = leftVal;
      left++;
    } else {
      sorted[index] = rightVal;
      right--;
    }

    index--; // Move backward in the result array
  }

  return sorted;
}

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
