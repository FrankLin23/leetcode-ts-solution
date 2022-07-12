function twoSum(numbers: number[], target: number): number[] {
  const n = numbers.length;
  let i = 0,
    j = n - 1;
  while (i < j) {
    let sum = numbers[i] + numbers[j];
    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else {
      return [i + 1, j + 1];
    }
  }
  return [];
}
