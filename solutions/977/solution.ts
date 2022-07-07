function sortedSquares(nums: number[]): number[] {
  const n = nums.length;
  const res = new Array(n);
  let l = 0,
    r = n - 1,
    k = n - 1;
  while (l <= r) {
    let a = nums[l] * nums[l];
    let b = nums[r] * nums[r];
    if (a > b) {
      res[k] = a;
      l++;
    } else {
      res[k] = b;
      r--;
    }
    k--;
  }
  return res;
}
