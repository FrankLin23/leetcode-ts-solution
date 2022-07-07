/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k %= n;
  nums.reverse();
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
}

function reverse(nums: number[], start: number, end: number) {
  while (start < end) {
    const tmp = nums[start];
    nums[start] = nums[end];
    nums[end] = tmp;
    start += 1;
    end -= 1;
  }
}
