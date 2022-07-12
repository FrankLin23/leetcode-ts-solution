function reverseWords(s: string): string {
  const res: string[] = [];
  const n = s.length;
  let i = 0;
  while (i < n) {
    let start = i;
    while (i < n && s.charAt(i) != " ") {
      i++;
    }
    for (let j = start; j < i; j++) {
      res.push(s.charAt(start + i - 1 - j));
    }
    while (i < n && s.charAt(i) == " ") {
      i++;
      res.push(" ");
    }
  }
  return res.join("");
}
