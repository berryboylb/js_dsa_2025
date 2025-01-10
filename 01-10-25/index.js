/*


55. Jump Game
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/

/*

  Pseudocode

*/

export function solution(nums) {
  if (nums.length === 1) return 0;
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {  
     farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
      if(currentEnd >= nums.length - 1) break
    }
  }
  return jumps;
}

export function main() {
  solution([2, 3, 1, 1, 4]);
}
