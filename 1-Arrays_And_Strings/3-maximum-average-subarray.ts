function findMaxAverage(nums: number[], k: number): number {
  /*
    You are given an integer array nums consisting of n elements, and an integer k.

    Find a contiguous subarray whose length is equal to k that has the maximum average value 
    and return this value. Any answer with a calculation error less than 10-5 will be accepted.
  */

  if (nums.length < k) {
    throw new Error("Array length must be at least k");
  }

  let left = 0; // Left Pointer
  let curr = 0; // Current maximum average of the window
  let ans = -Infinity; // Maximum average of subarrays with length === k

  // Iterate the length of nums, using right as a pointer
  for (let right = 0; right < nums.length; right++) {
    // Accumulate the curr total with right value
    curr += nums[right];

    // While the window is larger than the target (k) length
    while (right - left + 1 > k) {
      // Remove the left value and increment left pointer
      // Why? - Window has reached max size, adjusting to next
      // sub-array of k length
      curr -= nums[left];
      left++;
    }

    // Where the window is K in length, we have our target
    if (right - left + 1 === k) {
      // Re-assign answer to the maximum of itself (from the prev iteration)
      // and the current value averaged in this iteration
      // This will maintain a maximum average value for ans
      ans = Math.max(ans, curr / k);
    }
  }

  return ans;
}

let nums = [1, 12, -5, -6, 50, 3],
  k = 4;
console.log(findMaxAverage(nums, k));

/*
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
*/

(nums = [5]), (k = 1);
console.log(findMaxAverage(nums, k));
