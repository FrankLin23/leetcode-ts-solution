/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const n = nums.length;
  let i = 0,
    j = 0;
  while (j < n) {
    if (nums[j] != 0) {
      swap(nums, i, j);
      i++;
    }
    j++;
  }
}

function swap(nums: number[], i: number, j: number): void {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}
