export function solution(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const rem = k - nums[i];

    if (map.has(rem)) {
      return true;
    }

    map.set(nums[i], i);
  }
  return false;
}

export function main() {
  const tests = [
    { nums: [10, 15, 3, 7], k: 17, expected: true },
    { nums: [10, 15, 3, 7], k: 20, expected: false },
    { nums: [], k: 5, expected: false },
    { nums: [5], k: 5, expected: false },
    { nums: [5, 5], k: 10, expected: true },
    { nums: [5, 1], k: 10, expected: false },
    { nums: [1, 2, 3, 4, 4], k: 8, expected: true },
    { nums: [1, 1, 1, 1], k: 3, expected: false },
    { nums: [-3, 1, 2, 4, 6], k: 3, expected: true },
    { nums: [-5, -2, -1, -9], k: -3, expected: true },
    { nums: [-5, -2, -1, -9], k: 2, expected: false },
    { nums: [1000000, 2999999, 700000, 3000000], k: 4000000, expected: true },
    { nums: [1000000, 2999999, 700000, 3000000], k: 10000000, expected: false },
    { nums: [0, 1, 2, 3], k: 0, expected: false },
    { nums: [0, 0], k: 0, expected: true },
  ];

  tests.forEach(({ nums, k, expected }, index) => {
    const result = solution(nums, k);
    const pass = result === expected;
    console.log(
      `Test #${index + 1}: ${
        pass ? "PASSED" : "FAILED"
      } | Output: ${result} | Expected: ${expected}`
    );
  });
}
