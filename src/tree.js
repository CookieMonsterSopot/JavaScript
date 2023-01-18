function drawTree(height) {
  for (var i = 0; i < height; i++) {
    // 2n+1 stars per row i.e. 1, 3, 5, 7, ...
    var stars = "*".repeat(2 * i + 1);
    var spacesBefore = " ".repeat(height - i - 1);
    document.write(spacesBefore + stars);
  }
}

drawTree(prompt("How many levels high should be the tree?"));
