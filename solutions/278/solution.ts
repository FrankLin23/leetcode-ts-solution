/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let l = 1,
      r = n;
    while (l < r) {
      const mid = Math.floor(l + (r - l) / 2);
      if (isBadVersion(mid)) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    return l;
  };
};
