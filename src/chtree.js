const tree = (n) => {
  const result = [];
  for (let i = 1; i <= n; i += 1) {
    result[i] = "";
    for (let j = i; j < n; j++) {
      result[i] += " ";
    }
    const max = 2 * i - 1;
    for (let j = 1; j <= max; j++) {
      result[i] += "*";
    }
  }
  return result.join("\n");
};
console.log(tree(5));
