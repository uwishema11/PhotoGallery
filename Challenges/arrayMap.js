function hasContiguousSubarray(arr, target) {
  // Initialize current sum and starting index
  let currentSum = 0;
  let startIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    // Add current element to the sum
    currentSum += arr[i];
    // Check if current sum equals the target
    if (currentSum === target) {
      return true;
    }
    // If current sum is greater than the target, shrink the window from the beginning
    if (currentSum > target && startIndex < i) {
      currentSum -= arr[startIndex];
      startIndex += 1;
    }
  }
  // If no subarray is found that sums to the target, return false
  return false;
}

// Example usage
const arr = [4, 2, 0, 1, 9, 5];
const target = 14;

// this will return fale
console.log(hasContiguousSubarray(arr, target));
