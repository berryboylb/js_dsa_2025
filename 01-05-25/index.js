/*
   169. Majority Element
   Given an array nums of size n, return the majority element.

   The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

/*
   Pseudocode

   1. initialize a map, max and max occurrence

   2. go through loop and increment current index occurrence in the map

   3. if current index occurrence is higher than max occurrence
    replace max and max occurrence

   4. return max
*/

export function solution(nums) {
  let max = 0;
  let occ = 0;
  let map = {};
  for (const num of nums) {
    map[num] = (map[num] ?? 0) + 1;
    if (map[num] > occ) {
      max = num;
      occ = map[num];
    }
  }
  return max;
}

export function main() {
  solution([2, 2, 1, 1, 1, 2, 2]);
}
