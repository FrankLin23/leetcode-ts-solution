function search(nums: number[], target: number): number {
  const n = nums.length;
  let l = 0,
    r = n - 1;
  while (l <= r) {
    let mid = (l + r) >> 1;
    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
