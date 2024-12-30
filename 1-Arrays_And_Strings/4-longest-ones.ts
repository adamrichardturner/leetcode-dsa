function longestOnes(nums: number[], k: number): number {
  // Initialize two pointers for the sliding window
  let left = 0; // Start of the window
  let right = 0; // End of the window

  // Count the number of zeroes in the current window
  let zeroes = 0;

  // Variable to keep track of the maximum length of 1's we can achieve
  let maxLength = 0;

  // Iterate through the array with the right pointer
  for (right = 0; right < nums.length; right++) {
    // If the current number is 0, increment the zeroes counter
    if (nums[right] === 0) {
      zeroes++;
    }

    // If the number of zeroes exceeds k, shrink the window from the left
    while (zeroes > k) {
      if (nums[left] === 0) {
        zeroes--; // Reduce the count of zeroes as we move past one
      }
      left++; // Move the left pointer to shrink the window
    }

    // Update the maximum length of the window
    maxLength = Math.max(maxLength, right - left + 1);
  }

  // Return the maximum length of the window found
  return maxLength;
}

// Test cases
const nums1 = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k1 = 2;
console.log(longestOnes(nums1, k1)); // Output: 6

const nums2 = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
const k2 = 3;
console.log(longestOnes(nums2, k2)); // Output: 10
