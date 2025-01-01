/*
  Problem

  Merge Sorted Array:

  You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

  Merge nums1 and nums2 into a single array sorted in non-decreasing order.

  The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

/* Psudocode 

  1. check if nums2 has items
  2. get the last item from nums2
  3. loop through nums1
  4. if the current element is 0, replace it with the last item from nums2
  5. sort nums1
  6. exit the for loop

*/

// export function solution(nums1, m, nums2, n) {

//   while (nums2.length) {
//     const firstEl = nums2.shift();
//     for (let i = 0; i < nums1.length; i++) {
//      if(nums1[i] === 0) {
//       nums1[i] = firstEl;
//       nums1.sort((a, b) => a - b)
//       break;
//      }
//     }
//     if (nums2.length === 0) break;
//   }
//   console.log(nums1)
// }


/* Psuedocode 

  1. iterate through nums2
  2. get the current element from nums2
  3. place it in the first available zero position in nums1
  4. reorder nums1 by sorting from the end

*/
export function solution(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    const newElement = nums2[i]; // Get the next element from nums2
    nums1[m + i] = newElement; // Place it in the first available zero position

    // Reorder nums1 by sorting from the end (insertion logic)
    let index = m + i;
    while (index > 0 && nums1[index] < nums1[index - 1]) {
      [nums1[index], nums1[index - 1]] = [nums1[index - 1], nums1[index]]; // Swap elements
      index--;
    }
  }

  console.log(nums1); // Final sorted nums1
}

export function main() {
  solution([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
}
