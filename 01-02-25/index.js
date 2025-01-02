/*
  Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

*/

export function solution(nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; ) {
    if (nums[i] != val) {
      count++;
      i++;
    } else {
      nums.splice(i, 1);
    }
  }
  console.log(count, nums);
  return count;
}

export function main() {
  solution([0, 1, 2, 2, 3, 0, 4, 2], 2);
}
