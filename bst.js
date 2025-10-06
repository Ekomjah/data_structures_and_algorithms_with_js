class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(array) {
    this.array = array;
    this.root = buildTree(array);
  }
}

function buildTree(array, start, end) {
  if (start > end) return null;
  let mid = start + Math.floor((end - start) / 2);
  let root = new Node(array[mid]);
  root.left = buildTree(array, start, mid - 1);
  root.right = buildTree(array, mid + 1, end);
  return root;
}

function deduplicate(arr) {
  return buildTree(arr, 0, arr.length - 1);
}
let array = [8, 1, 1, 6, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345];
let sorted = [...new Set(array)].sort((a, b) => a - b);

const prettyPrint = (
  node = deduplicate(sorted),
  prefix = "",
  isLeft = true
) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint();
