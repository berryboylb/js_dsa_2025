export function solution(nums) {
  const res = [];
  let prefix = 1;
  for (const num of nums) {
    res.push(prefix);
    prefix = prefix * num;
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * suffix;
    suffix = nums[i] * suffix;
  }
  console.log(res)
  return res
}

export function main() {
  solution([-1,1,0,-3,3]);
}
