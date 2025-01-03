/*

PROBLEM 
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

*/

/* 
    Psuedocode
    1. set a counter and set for unique values
    2. loop through nums and check if it's not in the set
    3. add to the set, increase the array and move to the next item
 */

export function solution(nums) {
  let count = 0;
  const set = new Set();
  for (let i = 0; i < nums.length; ) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
      count++;
      i++;
    } else nums.splice(i, 1);
  }

  console.log(count, nums, set);
  return count;
}

export function main() {
  solution([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
}
