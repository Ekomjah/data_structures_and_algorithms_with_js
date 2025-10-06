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
  let sortedVersion = array.sort((a, b) => a - b);
  let returnedArr = [...new Set(sortedVersion)];
  let mid = start + Math.floor((end - start) / 2);
  let root = new Node(returnedArr[mid]);
  root.left = buildTree(returnedArr, start, mid - 1);
  root.right = buildTree(returnedArr, mid + 1, end);
  console.log(returnedArr);
  return root;
}

let array = [8, 1, 1, 6, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345];

const prettyPrint = (
  node = buildTree(array, 0, array.length - 1),
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
