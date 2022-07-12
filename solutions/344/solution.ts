/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const n = s.length;
  let i = 0,
    j = n - 1;
  while (i <= j) {
    swap(s, i, j);
    i++;
    j--;
  }
}

function swap(arr: string[], i: number, j: number) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
