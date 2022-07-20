function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const m = image.length,
    n = image[0].length;
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const val = image[sr][sc];
  const dfs = (x: number, y: number): void => {
    image[x][y] = color;
    for (const [dx, dy] of dir) {
      let nx = x + dx,
        ny = y + dy;
      if (
        nx < 0 ||
        ny < 0 ||
        nx >= m ||
        ny >= n ||
        image[nx][ny] !== val ||
        image[nx][ny] === color
      )
        continue;
      dfs(nx, ny);
    }
  };
  dfs(sr, sc);
  return image;
}
