/*
   189. Rotate Array

   Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/

/*
   Pseudocode

   1. initialize a map, max and max occurrence

   2. go through loop and increment current index occurrence in the map

   3. if current index occurrence is higher than max occurrence
    replace max and max occurrence

   4. return max
*/

export function solution(nums, k) {
  while (k > nums.length) {
    k -= nums.length;
  }
  let i = nums.length - k;
  let first = nums.slice(i);
  let second = nums.slice(0, i);
  console.log(i, first, second);
  console.log(nums);
  let l = 0;
  for (; l < first.length; l++) {
    nums[l] = first[l];
  }
  console.log(nums);
}

export function main() {
  solution([1, 2, 3, 4, 5, 6, 7], 3);
}
