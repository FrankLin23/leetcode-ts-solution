function lengthOfLongestSubstring(s: string): number {
  const map = new Map();
  let res: number = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
    while (map.get(s[i]) > 1) {
      map.set(s[j], map.get(s[j]) - 1);
      j++;
    }
    res = Math.max(res, i - j + 1);
  }
  return res;
}
