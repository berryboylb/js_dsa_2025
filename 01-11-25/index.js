/*

274. H-Index

Hint
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.
*/

/*

  Pseudocode

*/

export function solution(citations) {
  let n = citations.length;

  citations.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (citations[i] >= n - i) return n - i;
  }

  return 0;
}

export function main() {
  solution([3, 0, 6, 1, 5]);
}
