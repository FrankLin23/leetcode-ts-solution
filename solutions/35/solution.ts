function searchInsert(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1;
  let res = r + 1;
  while (l <= r) {
    let mid = ((r - l) >> 1) + l;
    if (nums[mid] >= target) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return res;
}
